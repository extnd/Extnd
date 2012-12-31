/**
 * A Grid header type which renders a column for a Domino view.  This class is used by the Ext.nd.data.ViewDesign class
 * and you typically do not need to use this class directly.
 */
Ext.define('Ext.nd.grid.ViewColumn', {

    extend  : 'Ext.grid.column.Column',
    alias   : ['widget.xnd-viewcolumn'],

    requires: [
        'Ext.util.Format'
    ],

    /**
     * @property align
     */
    /**
     * @property dataIndex defaults to the name set for the column in Domino Designer
     */
    /**
     * @property width
     */
    /**
     * @property totals
     */
    /**
     * @property sortable
     */
    /**
     * @property resortascending
     */
    /**
     * @property resortdescending
     */
    /**
     * @property resortviewunid
     */
    /**
     * @property sortcategorize
     */
    /**
     * @property resize
     */
    /**
     * @property listseparator
     */
    /**
     * @property response
     */
    /**
     * @property twistie
     */
    /**
     * @property icon
     */
    /**
     * @property datetimeformat
     */
    /**
     * @property numberformat
     */


    initComponent: function () {
        var me = this;

        // applyIf so that these can all be overridden if passed into the config
        Ext.applyIf(me, {
            dateTimeFormats     : Ext.nd.dateTimeFormats,
            formatCurrencyFnc   : Ext.util.Format.usMoney
        });

        me.callParent(arguments);
    },

    /**
     * Default renderer method to handle column data in Domino Views
     */
    defaultRenderer: function (value, cell, record, rowIndex, colIndex, store) {
        var me                  = this,
            grid                = me.up('grid'),
            entryData           = record.viewEntry.entryData[me.dataIndex] || {},
            returnValue         = '',
            newValue,
            nextRecord          = store.getAt(rowIndex + 1),
            recordLevel         = record.viewEntry.depth,
            sCollapseImage      = '<img src="' + grid.collapseIcon + '" style="vertical-align:bottom; margin-right:8px;"/>',
            sExpandImage        = '<img src="' + grid.expandIcon + '" style="vertical-align:bottom; margin-right:8px;"/>',
            indentPadding       = (20 * recordLevel) + 'px',
            indentPaddingNoIcon = (20 + (20 * recordLevel)) + 'px',
            nextRecordLevel,
            indent,
            extraIndent,
            tmpReturnValue      = '',
            tmpValue            = '',
            separator           = me.getListSeparator(),
            clearFloat          = '',
            i,
            len = 0;


        // first check to see if this is a 'phantom' (new record being dynamically added
        // like in the RowEditor example and if so, just let it pass
        if (record.phantom === true) {
            return (value === undefined) ? '' : value;
        }

        // TODO: need to figure out why we sometimes get a null for the value
        if (value === null) {
            return '';
        }

        // next, let's split value into an array so that we can process the listseparator.  we use '\n' since that is how
        // we stored multi-values in the Ext.nd.data.ViewXmlReader#parseEntryDataChildNodes method.
        if (value && value.split) {
            value = value.split('\n');
            len = value.length;
        }

        // if we don't have any data and this is not a response column
        // nor a category column then just return a blank
        if (typeof value === 'string' && value === '' && !me.response && !entryData.category) {
            return '';
        }


        // has children and is a categorized column
        if (record.hasChildren() && me.sortcategorize) {
            indent = entryData.indent;
            extraIndent = (indent > 0) ? 'padding-left:' + indent * 20 + 'px;' : '';
            cell.attr = 'style="position: absolute; width: auto; white-space: nowrap; ' + extraIndent + '"';

            if (nextRecord) {
                nextRecordLevel = nextRecord.viewEntry.depth;
                if (nextRecordLevel > recordLevel) {
                    cell.css = ' xnd-view-collapse xnd-view-category';
                    returnValue = sCollapseImage + me.getValue(value, record);
                } else {
                    cell.css = ' xnd-view-expand xnd-view-category';
                    returnValue = sExpandImage + me.getValue(value, record);
                }
            } else { // should be a categorized column on the last record
                cell.css = ' xnd-view-expand xnd-view-category';
                returnValue = sExpandImage + me.getValue(value, record);
            }

        } else {

            // is NOT a category but has children and IS NOT a response doc BUT IS a response COLUMN
            if (!record.isCategory() && record.hasChildren() && !record.isResponse() && me.response) {

                if (nextRecord) {
                    nextRecordLevel = nextRecord.viewEntry.depth;
                    if (nextRecordLevel > recordLevel) {
                        cell.css = 'xnd-view-collapse xnd-view-response';
                        returnValue = sCollapseImage;
                    } else {
                        cell.css = 'xnd-view-expand xnd-view-response';
                        returnValue = sExpandImage;
                    }
                } else { // should be a categorized column on the last record
                    cell.css = 'xnd-view-expand xnd-view-response';
                    returnValue = sExpandImage;
                }

            } else {

                // has children and IS a response doc
                if (record.hasChildren() && record.isResponse() && me.response) {
                    indent = entryData.indent;
                    extraIndent = (indent > 0) ? 'padding-left:' + (20 + (indent * 20)) + 'px;' : '';
                    cell.attr = 'style="position: absolute; width: auto; white-space: nowrap; ' + extraIndent + '"';
                    if (nextRecord) {
                        nextRecordLevel = nextRecord.viewEntry.depth;
                        if (nextRecordLevel > recordLevel) {
                            cell.css = 'xnd-view-collapse xnd-view-response';
                            returnValue = sCollapseImage + me.getValue(value, record);
                        } else {
                            cell.css = 'xnd-view-expand xnd-view-response';
                            returnValue = sExpandImage + me.getValue(value, record);
                        }
                    } else { // should be a categorized column on the last record
                        cell.css = 'xnd-view-expand xnd-view-response';
                        returnValue = sExpandImage + me.getValue(value, record);
                    }
                } else {

                    // does NOT have children and IS a response doc
                    if (!record.hasChildren() && record.isResponse() && me.response) {

                        cell.css = 'xnd-view-response';
                        indent = entryData.indent;
                        extraIndent = (indent > 0) ? 'padding-left:' + (20 + (indent * 20)) + 'px;' : '';
                        cell.attr = 'style="position: absolute; width: auto; white-space: nowrap; ' + extraIndent + '"';
                        returnValue = me.getValue(value, record);

                    } else {

                        if (me.icon) {
                            for (i = 0; i < len; i++) {
                                tmpValue = value[i];

                                if (isNaN(parseInt(tmpValue, 10)) || tmpValue === '0') {
                                    return '';
                                } else {
                                    // I believe the domino only has view icon images from 1 to 186
                                    newValue = (tmpValue < 10) ? '00' + tmpValue : (tmpValue < 100) ? '0' + tmpValue : (tmpValue > 186) ? '186' : tmpValue;
                                    clearFloat = (me.listseparator === 'newline') ? 'style="clear: left;"' : '';
                                    tmpReturnValue = '<div class="xnd-icon-vw xnd-icon-vwicn' + newValue + '" ' + clearFloat + '>&nbsp;</div>';
                                    if (i === 0) {
                                        returnValue = tmpReturnValue;
                                    } else {
                                        returnValue = returnValue + separator + tmpReturnValue;
                                    }
                                }
                            }

                        } else {
                            // just normal data but check first to see if a 'totals' column
                            if (me.totals !== 'none') {
                                cell.css = ' xnd-view-totals xnd-view-' + me.totals;
                            }
                            returnValue = me.getValue(value, record);
                        }
                    }
                }
            }
        }

        // now return our domino formatted value
        return returnValue;

    },

    // private
    getValue: function (value, record) {
        var me = this,
            sep,
            tmpDate,
            tmpDateFmt,
            tmpValue,
            entryData   = record.viewEntry.entryData[me.dataIndex] || {},
            dataType    = entryData.type,
            nbf         = me.numberformat,
            dtf         = me.datetimeformat,
            separator   = me.getListSeparator(),
            newValue    = '',
            i,
            len;

        // handle non-categorized columns
        if (me.sortcategorize && value.length === 0) {
            newValue = me.notCategorizedText;
        }

        // need to make sure value is an array
        // the loop below will format as needed
        value = (Ext.isArray(value)) ? value : ['' + value];
        len = value.length;

        for (i = 0, len; i < len; i++) {
            sep = (i + 1 < len) ? separator : '';
            tmpValue = value[i];

            // handle columns set to show an icon a little differently
            if (me.icon) {
                if (isNaN(parseInt(tmpValue, 10)) || tmpValue === 0) {
                    return '';
                } else {
                    // I believe domino only has view icon images from 1 to 186
                    newValue = (tmpValue < 10) ? '00' + tmpValue : (tmpValue < 100) ? '0' + tmpValue : (tmpValue > 186) ? '186' : tmpValue;
                    return '<img src="/icons/vwicn' + newValue + '.gif"/>';
                }

            } else if (me.totals === 'percentoverall' || me.totals === 'percentparent') {
                return Ext.util.Format.round(100 * parseFloat(tmpValue), nbf.digits) + '%';

            } else {

                switch (dataType) {

                    case 'datetimelist':
                    case 'datetime':
                        if (dtf.show === undefined) {
                            dtf.show = me.dateTimeFormats.show;
                        }
                        if (tmpValue.indexOf('T') > 0) {
                            tmpDate = tmpValue.split(',')[0].replace('T', '.');
                            tmpDateFmt = 'Ymd.His';
                        } else {
                            tmpDate = tmpValue;
                            tmpDateFmt = 'Ymd';
                            dtf.show = 'date'; // switch to date only since there isn't a time component present
                        }
                        tmpDate = Ext.Date.parse(tmpDate, tmpDateFmt);
                        switch (dtf.show) {
                            case 'date':
                                tmpValue = tmpDate ? Ext.Date.format(tmpDate, me.dateTimeFormats.dateFormat) : '';
                                break;
                            case 'datetime':
                                tmpValue = tmpDate ? Ext.Date.format(tmpDate, me.dateTimeFormats.dateTimeFormat) : '';
                                break;
                        }
                        break;

                    case 'textlist':
                    case 'text':
                        tmpValue = tmpValue;
                        break;

                    case 'numberlist':
                    case 'number':
                        tmpValue = parseFloat(tmpValue);

                        switch (nbf.format) {
                            case 'currency':
                                tmpValue = Ext.isEmpty(tmpValue) ? me.formatCurrencyFnc(0) : me.formatCurrencyFnc(tmpValue);
                                break;

                            case 'fixed' :
                            case 'scientific' :
                                if (nbf.percent) {
                                    tmpValue = Ext.util.Format.round(100 * tmpValue, nbf.digits) + '%';
                                } else {
                                    tmpValue = Ext.util.Format.round(tmpValue, nbf.digits);
                                }
                                break;

                            default :
                                tmpValue = tmpValue;
                        }
                        break;

                    default:
                        tmpValue = tmpValue;
                }

                newValue = newValue + tmpValue + sep;

            }
        }

        return newValue;
    },

    /**
     * Returns an appropriate separator string that can be used in html
     */
    getListSeparator : function () {
        var me = this,
            separator = '';

        switch (me.listseparator) {
            case 'none':
                separator = '';
                break;
            case 'space':
                separator = ' ';
                break;
            case 'comma':
                separator = ',';
                break;
            case 'newline':
                separator = '<br/>';
                break;
            case 'semicolon':
                separator = ';';
                break;
            default:
                separator = '';
        }

        return separator;
    }

});
