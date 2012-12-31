/**
 * A specialized version of {@link Ext.data.Store} to deal with oddities from
 * reading a Domino view via ?ReadViewEntries.  Use for widgets such as the
 * {@link Ext.nd.UIView}, or the {@link Ext.nd.form.ComboBox}.
 */
Ext.define('Ext.nd.data.ViewStore', {

    extend: 'Ext.data.Store',

    requires: [
        'Ext.nd.data.ViewXmlReader'
    ],

    /**
     * Creates a new ViewStore
     * @param {Object} config A config object containing the objects needed for
     * the ViewStore to access data, and read the data into Records.
     */
    constructor: function (config) {
        var me = this;

        // just to make sure that viewName, viewUrl, and dbPath get set
        //config = Ext.nd.util.cleanUpConfig(config);

        config = Ext.apply({

            proxy: {
                type    : 'ajax',
                url     : config.viewUrl + '?ReadViewEntries',

                reader: {
                    type            : 'xml',
                    root            : 'viewentries',
                    record          : 'viewentry',
                    totalRecords    : '@toplevelentries',
                    id              : '@position'
                }
            },

            // remap paramNames to work with Domino views
            paramNames : {
                start   : 'start',
                limit   : 'count', // domino uses count
                sort    : 'sort',
                dir     : 'dir'
            }

        }, config);



       /**
        * @cfg {Boolean} removeCategoryTotal
        * by default we remove the category total since charts and combos
        * which could use views don't need this.  pretty much only views
        * care about this and in {@link Ext.nd.data.ViewDesign (that views use)
        * this is set to true for you
        */
        me.removeCategoryTotal = true;

        /**
         * @property {Ext.util.MixedCollection} previousStartMC
         * Cache of previous start positions
         */
        me.previousStartMC = new Ext.util.MixedCollection();

        me.callParent([config]);


       /**
        * @cfg {String} category (optional)
        * the category to restrict to for views that are categorized
        */
        if (me.category && typeof me.category == 'string') {
            me.baseParams.RestrictToCategory = me.category;
        }

    },


    /**
     * Loads the Record cache from the configured Proxy using the configured Reader.
     * <p>
     * This version is specifically geared towards Domino Views
     * @param {Object} options An object containing properties which control loading options:
     * <pre><code>
     params {Object} An object containing properties to pass as HTTP parameters to a remote data source.
     callback {Function} A function to be called after the Records have been loaded. The callback is
     passed the following arguments:
     r : Ext.data.Record[]
     options: Options object from the load call
     success: Boolean success indicator
     scope {Object} Scope with which to call the callback (defaults to the Store object)
     append {Boolean} indicator to append loaded records rather than replace the current cache.
     * </code></pre>
     */
    loadzz: function(options){
        options = options || {};

        if (this.fireEvent("beforeload", this, options) !== false) {
            this.storeOptions(options);

            // make sure options has a params property
            options.params = (options.params) ? options.params : {};

            // do some baseParams cleanup
            if (options.params.expand || options.params.expandview) {
                if (this.baseParams.collapse) {
                    delete this.baseParams.collapse;
                }
                if (this.baseParams.collapseview) {
                    delete this.baseParams.collapseview;
                }
            }
            if (options.params.collapse || options.params.collapseview) {
                if (this.baseParams.expand) {
                    delete this.baseParams.expand;
                }
                if (this.baseParams.expandview) {
                    delete this.baseParams.expandview;
                }
            }

            // now merge the baseParams and passed in params
            var p = Ext.apply(this.baseParams, options.params || {});


            if (this.sortInfo && this.remoteSort) {
                var pn = this.paramNames;

                // domino does not have separate params for sort and dir
                // instead, domino combines them into one of two choices
                // resortascending=colNbr
                // resortdescending=colNbr

                var f = this.fields.get(this.sortInfo.field);
                var sortColumn = f.mapping; // to support older domino versions we will use colnumber (however, this will probably cause DND column reordering to break when sorting)
                // get the config info for this column
                var colConfig = this.reader.meta.columnConfig.items[sortColumn];
                if (colConfig.resortviewunid != "") {
                    return; // the grid should have handled the request to change view
                }

                //p[pn["dir"]] = this.sortInfo.direction;
                var sortDir = this.sortInfo.direction;

                // TODO: need to refactor this section into it's own method
                if (sortDir == "ASC") {
                    if (typeof p.resortascending != 'undefined') {
                        if (p.resortascending != sortColumn) { // changing to a new sort column, so reset
                            p.resortascending = sortColumn;
                            if (p.start) {
                                delete p.start;
                                delete p.startkey;
                            }
                            delete p.resortdescending;
                        } else {
                            if (p.start) {
                                delete p.startkey; // delete startkey once we have a start param
                            }
                        }
                        // else part of - p.resortascending
                    } else {
                        p.resortascending = sortColumn;
                        delete p.start;
                        delete p.startkey;
                        delete p.resortdescending;
                    }

                    // else part of - sortDir == "ASC"
                } else {
                    if (typeof p.resortdescending != 'undefined') {
                        if (p.resortdescending != sortColumn) { // changing to a new sort column so reset
                            p.resortdescending = sortColumn;
                            if (p.start) {
                                delete p.start;
                                delete p.startkey;
                            }
                            delete p.resortdescending;
                        } else {
                            if (p.start) {
                                delete p.startkey; // delete startkey once we have a start param
                            }
                        }
                        // else part of p.resortdescending
                    } else {
                        p.resortdescending = sortColumn;
                        delete p.start;
                        delete p.startkey;
                        delete p.resortascending;
                    }
                }
            }

            this.proxy.doRequest(
                    'read',
                    null,
                    p,
                    this.reader,
                    this.loadRecords,
                    this, options);
        }
    },

    // override to get rid of a category total
    loadRecords : function(o, options, success) {
        var lastRecord, len;

        if (this.removeCategoryTotal) {
            len = o.records.length;
            if (len > 0) {
                lastRecord = o.records[len-1];
                if (lastRecord.isCategoryTotal) {
                    o.records.pop(); // remove this last record
                }
            }
        }
        // now continue on and call our superclass.loadRecords
        Ext.nd.data.ViewStore.superclass.loadRecords.call(this, o, options, success);
    },

    /**
     * Sort the Records.
     * Added mapping for Domino Views
     * @param {String} fieldName The name of the field to sort by.
     * @param {String} dir (optional) The sort order, "ASC" or "DESC" (defaults to "ASC")
     */
    sort: function(fieldName, dir){
        var f = this.fields.get(fieldName);
        if (!f) {
            return false;
        }
        if (!dir) {
            if (this.sortInfo && this.sortInfo.field == f.name) { // toggle sort dir
                dir = (this.sortToggle[f.name] || "ASC").toggle("ASC", "DESC");
            } else {
                dir = f.sortDir;
            }
        }

        this.sortToggle[f.name] = dir;
        this.sortInfo = {field: f.name, direction: dir};

        if (!this.remoteSort) {
            this.applySort();
            this.fireEvent("datachanged", this);
        } else {
            this.load(this.lastOptions);
        }
    },

    // PAGING METHODS
    /**
     * Customized version for Domino views
     * @param {String} start The 'start' position of the view to load.
     * @param {Object} [options] See options for {@link #method-load}.
     */
    loadPage: function(start, options) {
        var me = this;

        me.currentPage = start;

        // Copy options into a new object so as not to mutate passed in objects
        options = Ext.apply({
            params: {
                start: start,
                count: me.pageSize,
            },
            addRecords: !me.clearOnPageLoad
        }, options);

        if (me.buffered) {
            return me.loadToPrefetch(options);
        }
        me.load(options);
    },

    /**
     * Custom version for Domino views
     * Loads the next 'page' in the current data set
     * @param {Object} options See options for {@link #method-load}
     */
    nextPage: function (options) {
        var me      = this,
            lastRec = me.last(),
            start   = lastRec.viewEntry.position;

        // never start a category total row on a new page
        if (lastRec.isCategoryTotal()) {
            lastRec = me.getAt(lastRec.index - 1);
            start = lastRec.viewEntry.position;
        }

        // add to our previousStartMC cache
        me.previousStartMC.add(start, lastRec);
        me.loadPage(start, options);
    },

    /**
     * Custom version for Domino views
     * Loads the previous 'page' in the current data set
     * @param {Object} options See options for {@link #method-load}
     */
    previousPage: function (options) {
        var me              = this,
            firstRec        = me.first(),
            firstPosition   = firstRec.viewEntry.position,
            indexFirst      = me.previousStartMC.indexOfKey(firstPosition);

        if (indexFirst !== -1) {
            if (indexFirst === 0) {
                start = 1;
            } else {
                start = me.previousStartMC.get(indexFirst - 1).viewEntry.position
            }
        }

        me.loadPage(start, options);
    },

});