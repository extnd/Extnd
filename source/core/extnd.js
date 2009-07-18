/* first attempt

Ext.override(Ext.grid.CheckboxSelectionModel, {

			// private
			initEvents : function() {
				Ext.grid.CheckboxSelectionModel.superclass.initEvents.call(this);

				// when the grid renders add the mousedown events
				this.grid.on('render', function() {
							var view = this.grid.getView();
							view.mainBody.on('mousedown', this.onMouseDown,
									this);
							Ext.fly(view.innerHd).on('mousedown',
									this.onHdMouseDown, this);
						}, this);

				// before the row is selected check for custom deselectingFlag
				// and DnD
				this.on('beforerowselect', function(sm, rowIndex, keep, rec) {
							if (this.deselectingFlag
									&& this.grid.enableDragDrop) {
								this.deselectingFlag = false;
								this.deselectRow(rowIndex);
								return this.deselectingFlag;
							}
							return keep;
						}, this);

				// rowclick
				this.grid.on('rowclick', function(grid, rowIndex, e) {
							if (e.button === 0 && !e.shiftKey && !e.ctrlKey) {
								this.selectRow(rowIndex, true); // true to keep
								// existing
								grid.view.focusRow(rowIndex);
							}
						}, this);

			},

			onMouseDown : function(e, t) {
				//
				// If you want make selections only by checking the checker box,
				// add "&& t.className == 'x-grid3-row-checker'" to next if
				// statement
				// 
				// If you want to make selection only with Ctrl key pressed, add
				// "&& e.ctrlKey" to next if statement
				//
				if (e.button === 0 && t.className == 'x-grid3-row-checker') {
					e.stopEvent();
					var row = e.getTarget('.x-grid3-row');
					if (row) {
						var index = row.rowIndex;
						if (this.isSelected(index)) {
							if (this.grid.enableDragDrop) {
								this.deselectRow(index);
							}
							this.deselectingFlag = true;

						} else {
							if (this.grid.enableDragDrop) {
								this.deselectingFlag = false;
							}
							this.selectRow(index, true);
						}
					}
				}
			}
		});
*/

/* 
 * attempt 2 (http://extjs.com/forum/showthread.php?t=36418)
 */
Ext.grid.RowSelectionModel.override(
{
    // FIX: added this function so it could be overrided in CheckboxSelectionModel
    handleDDRowClick: function(grid, rowIndex, e)
    {
        if(e.button === 0 && !e.shiftKey && !e.ctrlKey) {
            this.selectRow(rowIndex, false);
            grid.view.focusRow(rowIndex);
        }
    },
    
    initEvents: function ()
    {
        if(!this.grid.enableDragDrop && !this.grid.enableDrag){
            this.grid.on("rowmousedown", this.handleMouseDown, this);
        }else{ // allow click to work like normal
            // FIX: made this handler function overrideable
            this.grid.on("rowclick", this.handleDDRowClick, this);
        }

        this.rowNav = new Ext.KeyNav(this.grid.getGridEl(), {
            "up" : function(e){
                if(!e.shiftKey){
                    this.selectPrevious(e.shiftKey);
                }else if(this.last !== false && this.lastActive !== false){
                    var last = this.last;
                    this.selectRange(this.last,  this.lastActive-1);
                    this.grid.getView().focusRow(this.lastActive);
                    if(last !== false){
                        this.last = last;
                    }
                }else{
                    this.selectFirstRow();
                }
            },
            "down" : function(e){
                if(!e.shiftKey){
                    this.selectNext(e.shiftKey);
                }else if(this.last !== false && this.lastActive !== false){
                    var last = this.last;
                    this.selectRange(this.last,  this.lastActive+1);
                    this.grid.getView().focusRow(this.lastActive);
                    if(last !== false){
                        this.last = last;
                    }
                }else{
                    this.selectFirstRow();
                }
            },
            scope: this
        });

        var view = this.grid.view;
        view.on("refresh", this.onRefresh, this);
        view.on("rowupdated", this.onRowUpdated, this);
        view.on("rowremoved", this.onRemove, this);
    }
});

Ext.grid.CheckboxSelectionModel.override(
{
    // FIX: added this function to check if the click occured on the checkbox.
    //      If so, then this handler should do nothing...
    handleDDRowClick: function(grid, rowIndex, e)
    {
        var t = Ext.lib.Event.getTarget(e);
        if (t.className != "x-grid3-row-checker") {
            Ext.grid.CheckboxSelectionModel.superclass.handleDDRowClick.apply(this, arguments);
        }
    }
});

Ext.grid.GridDragZone.override(
{
    getDragData: function (e)
    {
        var t = Ext.lib.Event.getTarget(e);
        var rowIndex = this.view.findRowIndex(t);
        if(rowIndex !== false){
            var sm = this.grid.selModel;
            // FIX: Added additional check (t.className != "x-grid3-row-checker"). It may not
            //      be beautiful solution but it solves my problem at the moment.
            if ( (t.className != "x-grid3-row-checker") && (!sm.isSelected(rowIndex) || e.hasModifier()) ){
                sm.handleMouseDown(this.grid, rowIndex, e);
            }
            return {grid: this.grid, ddel: this.ddel, rowIndex: rowIndex, selections:sm.getSelections()};
        }

        return false;
    }
});

// for all toolbars we add some custom methods that help domino apps
Ext.Toolbar.override({
   
    getUIView: function() {
        if (!this.uiView) {
            if (this.ownerCt && this.ownerCt.getXType() == 'xnd-uiview') {
                this.uiView = this.ownerCt;
            } else {
                this.uiView = null;
            }
        }
        return this.uiView;
    },
    
    getUIDocument: function() {
        if (!this.uiDocument) {
            if (this.ownerCt && this.ownerCt.getXType() == 'xnd-uidocument') {
                this.uiDocument = this.ownerCt;
            } else {
                this.uiDocument = null;
            }
        }
        return this.uiDocument;
    }
});

Ext.namespace("Ext.nd", "Ext.nd.form", "Ext.nd.data", "Ext.nd.util");

Ext.nd.version = 'pre-release 2 - Beta 2 for ExtJS 3.x';

Ext.nd.getBlankImageUrl = function() {
	return this.extndUrl + "resources/images/s.gif";
};

Ext.nd.init = function(config) {
	Ext.apply(this, config);
	Ext.BLANK_IMAGE_URL = this.getBlankImageUrl();
};

/**
 * @class Ext.nd.util.addIFrame
 * @cfg {String} documentLoadingWindowTitle The loading text to display as the
 *      document is loading.
 * @cfg {String} documentUntitledWindowTitle The text to display if the loaded
 *      document does not have a window title defined.
 * @cfg {Boolean} useDocumentWindowTitle If set to true then an attempt will be
 *      made to get and set the title to the document's window title.
 * @cfg {String/Componet} target Where the iframe should load
 * @singleton
 */
Ext.nd.util.addIFrame = function(config) {

	var target;
	var targetPanel = false; // if the target is an Ext container
	var targetDiv = false; // if the target is simply a div
	var panel = false; // the panel that will contain the iframe
	var iframe = false; // the iframe

	var documentLoadingWindowTitle = config.documentLoadingWindowTitle
			|| (config.uiDocument
					? config.uiDocument.documentLoadingWindowTitle
					: (config.uiView
							? config.uiView.documentLoadingWindowTitle
							: "Opening"));
	var documentUntitledWindowTitle = config.documentUntitledWindowTitle
			|| (config.uiDocument
					? config.uiDocument.documentUntitledWindowTitle
					: (config.uiView
							? config.uiView.documentUntitledWindowTitle
							: "(Untitled)"));
	var useDocumentWindowTitle = config.useDocumentWindowTitle
			|| (config.uiDocument
					? config.uiDocument.useDocumentWindowTitle
					: (config.uiView
							? config.uiView.useDocumentWindowTitle
							: true));
	var documentWindowTitleMaxLength = config.documentWindowTitleMaxLength
			|| (config.uiDocument
					? config.uiDocument.documentWindowTitleMaxLength
					: (config.uiView
							? config.uiView.documentWindowTitleMaxLength
							: 16));
	var targetDefaults = config.targetDefaults
			|| (config.uiDocument
					? config.uiDocument.targetDefaults
					: (config.uiView ? config.uiView.targetDefaults : {}));

	// first, determine the target
	// try and see if it is a component first
	target = (config.target.getXType) ? config.target : Ext
			.getCmp(config.target);
	// if it is not then see if it is an id or element in the dom
	target = (target && target.getXType) ? target : Ext.get(target);

	// if the add method exists then the 'target' is some kind of panel
	// otherwise, it might just be a div on the page
	if (target.add) {

		// ok, target is a panel so store a reference to it
		targetPanel = target;

		// checking to see if a panel with this component id (not dom id)
		// already exists in the 'target' panel
		// if it does already exist, we'lll just show that panel later in the
		// code
		if (targetPanel.items) {
			panel = targetPanel.items.get(config.id);
		}

	} else {
		// the target passed in is not an Ext panel so it must be a div
		// so we will add the iframe directly to this div
		targetDiv = Ext.get(target);
	}

	// check for the panel that will have the iframe
	if (!panel) {

		// the id of the iframe
		var ifId = 'if-' + config.id;

		// our config options for the panel
		var panelConfig = Ext.apply({
					html : "<iframe id='" + ifId + "' src='" + config.url
							+ "' frameBorder='0' width='100%' height='100%'/>",
					title : config.title || documentLoadingWindowTitle,
					layout : 'fit',
					id : config.id,
					closable : true
				}, config.targetDefaults);

		// if target is a panel, add the iframe to the panel
		if (targetPanel) {

			// add the panel
			panel = targetPanel.add(panelConfig);

			// call doLayout so we can now see this
			if (targetPanel.doLayout) {
				targetPanel.doLayout();
			}

			// This is a hack to fix the memory issues that occur when opening
			// and
			// closing stuff within iFrames
			targetPanel.on('beforeremove', function(container, panel) {
						var iFrame = Ext.DomQuery.selectNode('iframe',
								panel.body.dom);
						if (iFrame) {
							if (iFrame.src) {
								iFrame.src = "javascript:false";
							}
							Ext.removeNode(iFrame);
						}
					})

		} else {
			// target is not a panel so must be dealing with a div element
			// check to make sure it exists before adding
			if (targetDiv) {
				panel = new Ext.Panel(panelConfig);
			}
		}

		// now show the panel (not sure if this is needed)
		if (panel.show) {
			panel.show();
		}

		// this block sets the ownerCt attribute of the iframe to the panel
		// and sets the panels title after the iframe loads
		// if there is an uiView property, it is set as well

		var dom = Ext.get(ifId).dom;
		var event = Ext.isIE ? 'onreadystatechange' : 'onload';
		dom[event] = (function() {

			try {
				var cd = this.contentWindow || window.frames[this.name];
				cd.ownerCt = panel;
				if (config.uiView) {
					cd.uiView = config.uiView;
				}
				if (targetPanel) {
					cd.target = targetPanel;
				}
			} catch (e) {
				// not doing anything if an error
				// an error usually means a x-domain security violation
			}

			// replace the panel's title with the the window title from the
			// iframe
			// if the useDocumentWindowTitle is set to true
			if (useDocumentWindowTitle) {
				try {
					var title = cd.document.title;
					if (title != "") {
						if (documentWindowTitleMaxLength != -1) {
							panel.setTitle(Ext.util.Format.ellipsis(title,
									documentWindowTitleMaxLength));
						} else {
							panel.setTitle(title);
						}

					} else {
						// there wasn't a title
						if (panel.title != config.title
								&& config.title != documentLoadingWindowTitle) {
							panel.setTitle(documentUntitledWindowTitle);
						}
					}

				} catch (e) {
					// there was an error getting the iframe's title maybe
					if (panel.title != config.title
							&& panel.title != documentLoadingWindowTitle) {
						panel.setTitle(documentUntitledWindowTitle);
					}
				}
			} // eo if (useDocumentWindowTitle)

		}).createDelegate(dom);

	} else { // we've already opened this panel
		if (panel.show) {
			panel.show();
		}
	}
    
} // eo addIFrame

Ext.nd.util.doLayoutAndShow = function(panel) {
	// all component's owner Ext.Container should have a doLayout
	// but check just in case
	if (panel.ownerCt && panel.ownerCt.doLayout) {
		panel.ownerCt.doLayout();
	}
	// and if the component has a show method,
	// call it so this newly added component is shown
	if (panel.show) {
		panel.show();
	}

} // eo doLayoutAndShow

Ext.nd.util.cleanUpConfig = function(config) {
    
    // viewUrl is either passed in or built from dbPath and viewName
    if (typeof config.viewName == 'string') {
        if (!config.dbPath && Ext.nd.Session) {
             config.dbPath = Ext.nd.Session.currentDatabase.webFilePath;
        }
        config.viewUrl = config.dbPath + config.viewName;
    }
    // ok, no viewName but do we have the viewUrl?
    else if (config.viewUrl) {
        var vni = config.viewUrl.lastIndexOf('/') + 1;
        config.dbPath = config.viewUrl.substring(0, vni);
        config.viewName = config.viewUrl.substring(vni);
    }

    return config;

} // eo cleanUpConfig
