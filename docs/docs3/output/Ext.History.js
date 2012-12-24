Ext.data.JsonP.Ext_History({"parentMixins":[],"extends":"Ext.util.Observable","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='docClass'>Ext.util.Observable</a><div class='subclass '><strong>Ext.History</strong></div></div><h4>Files</h4><div class='dependency'><a href='source/History.html#Ext-History' target='_blank'>History.js</a></div></pre><div class='doc-contents'><p>History management component that allows you to register arbitrary tokens that signify application\nhistory state on navigation actions.  You can then handle the history <a href=\"#!/api/Ext.History-event-change\" rel=\"Ext.History-event-change\" class=\"docClass\">change</a> event in order\nto reset your application UI to the appropriate state when the user navigates forward or backward through\nthe browser history stack.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-fieldId' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-property-fieldId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-property-fieldId' class='name expandable'>fieldId</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The id of the hidden field required for storing the current history token. ...</div><div class='long'><p>The id of the hidden field required for storing the current history token.</p>\n<p>Defaults to: <code>'x-history-field'</code></p></div></div></div><div id='property-iframeId' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-property-iframeId' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-property-iframeId' class='name expandable'>iframeId</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The id of the iframe required by IE to manage the history stack. ...</div><div class='long'><p>The id of the iframe required by IE to manage the history stack.</p>\n<p>Defaults to: <code>'x-history-frame'</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-add' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-method-add' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-method-add' class='name expandable'>add</a>( <span class='pre'>token, preventDuplicates</span> )</div><div class='description'><div class='short'>Add a new token to the history stack. ...</div><div class='long'><p>Add a new token to the history stack. This can be any arbitrary value, although it would\ncommonly be the concatenation of a component id and another id marking the specifc history\nstate of that component.  Example usage:</p>\n\n<pre><code>// Handle tab changes on a TabPanel\ntabPanel.on('tabchange', function(tabPanel, tab){\n    <a href=\"#!/api/Ext.History-method-add\" rel=\"Ext.History-method-add\" class=\"docClass\">Ext.History.add</a>(tabPanel.id + ':' + tab.id);\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>token</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The value that defines a particular application-specific history state</p>\n</div></li><li><span class='pre'>preventDuplicates</span> : Boolean<div class='sub-desc'><p>When true, if the passed token matches the current token\nit will not save a new history step. Set to false if the same state can be saved more than once\nat the same history stack location (defaults to true).</p>\n</div></li></ul></div></div></div><div id='method-back' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-method-back' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-method-back' class='name expandable'>back</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Programmatically steps back one step in browser history (equivalent to the user pressing the Back button). ...</div><div class='long'><p>Programmatically steps back one step in browser history (equivalent to the user pressing the Back button).</p>\n</div></div></div><div id='method-enableBubble' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-enableBubble' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-enableBubble' class='name expandable'>enableBubble</a>( <span class='pre'>events</span> )</div><div class='description'><div class='short'>Enables events fired by this Observable to bubble up an owner hierarchy by calling\nthis.getBubbleTarget() if present. ...</div><div class='long'><p>Enables events fired by this Observable to bubble up an owner hierarchy by calling\n<code>this.getBubbleTarget()</code> if present. There is no implementation in the Observable base class.</p>\n\n\n<p>This is commonly used by Ext.Components to bubble events to owner Containers. See Ext.Component.getBubbleTarget. The default\nimplementation in <a href=\"#!/api/Ext.Component\" rel=\"Ext.Component\" class=\"docClass\">Ext.Component</a> returns the Component's immediate owner. But if a known target is required, this can be overridden to\naccess the required target more quickly.</p>\n\n\n<p>Example:</p>\n\n\n<pre><code>Ext.override(<a href=\"#!/api/Ext.form.Field\" rel=\"Ext.form.Field\" class=\"docClass\">Ext.form.Field</a>, {\n    //  Add functionality to Field&#39;s initComponent to enable the change event to bubble\n    initComponent : Ext.form.Field.prototype.initComponent.createSequence(function() {\n        this.enableBubble('change');\n    }),\n\n    //  We know that we want Field&#39;s events to bubble directly to the FormPanel.\n    getBubbleTarget : function() {\n        if (!this.formPanel) {\n            this.formPanel = this.findParentByType('form');\n        }\n        return this.formPanel;\n    }\n});\n\nvar myForm = new Ext.formPanel({\n    title: 'User Details',\n    items: [{\n        ...\n    }],\n    listeners: {\n        change: function() {\n            // Title goes red if form has been modified.\n            myForm.header.setStyle('color', 'red');\n        }\n    }\n});\n</code></pre>\n\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>events</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/Array<div class='sub-desc'><p>The event name to bubble, or an Array of event names.</p>\n</div></li></ul></div></div></div><div id='method-forward' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-method-forward' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-method-forward' class='name expandable'>forward</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Programmatically steps forward one step in browser history (equivalent to the user pressing the Forward button). ...</div><div class='long'><p>Programmatically steps forward one step in browser history (equivalent to the user pressing the Forward button).</p>\n</div></div></div><div id='method-getToken' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-method-getToken' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-method-getToken' class='name expandable'>getToken</a>( <span class='pre'></span> ) : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></div><div class='description'><div class='short'>Retrieves the currently-active history token. ...</div><div class='long'><p>Retrieves the currently-active history token.</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span><div class='sub-desc'><p>The token</p>\n</div></li></ul></div></div></div><div id='method-init' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-method-init' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-method-init' class='name expandable'>init</a>( <span class='pre'>[onReady], [scope]</span> )</div><div class='description'><div class='short'>Initialize the global History instance. ...</div><div class='long'><p>Initialize the global History instance.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>onReady</span> : Boolean (optional)<div class='sub-desc'><p>A callback function that will be called once the history\ncomponent is fully initialized.</p>\n</div></li><li><span class='pre'>scope</span> : Object (optional)<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback is executed. Defaults to the browser window.</p>\n</div></li></ul></div></div></div><div id='method-relayEvents' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.util.Observable' rel='Ext.util.Observable' class='defined-in docClass'>Ext.util.Observable</a><br/><a href='source/Observable-more.html#Ext-util-Observable-method-relayEvents' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.util.Observable-method-relayEvents' class='name expandable'>relayEvents</a>( <span class='pre'>o, events</span> )</div><div class='description'><div class='short'>Relays selected events from the specified Observable as if the events were fired by this. ...</div><div class='long'><p>Relays selected events from the specified Observable as if the events were fired by <tt><b>this</b></tt>.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>o</span> : Object<div class='sub-desc'><p>The Observable whose events this object is to relay.</p>\n</div></li><li><span class='pre'>events</span> : Array<div class='sub-desc'><p>Array of event names to relay.</p>\n</div></li></ul></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-event'>Events</h3><div class='subsection'><div id='event-change' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-event-change' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-event-change' class='name expandable'>change</a>( <span class='pre'>token</span> )</div><div class='description'><div class='short'>Fires when navigation back or forwards within the local page's history occurs. ...</div><div class='long'><p>Fires when navigation back or forwards within the local page's history occurs.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>token</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>An identifier associated with the page state at that point in its history.</p>\n</div></li></ul></div></div></div><div id='event-ready' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.History'>Ext.History</span><br/><a href='source/History.html#Ext-History-event-ready' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.History-event-ready' class='name expandable'>ready</a>( <span class='pre'>The</span> )</div><div class='description'><div class='short'>Fires when the Ext.History singleton has been initialized and is ready for use. ...</div><div class='long'><p>Fires when the <a href=\"#!/api/Ext.History\" rel=\"Ext.History\" class=\"docClass\">Ext.History</a> singleton has been initialized and is ready for use.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>The</span> : <a href=\"#!/api/Ext.History\" rel=\"Ext.History\" class=\"docClass\">Ext.History</a><div class='sub-desc'><p><a href=\"#!/api/Ext.History\" rel=\"Ext.History\" class=\"docClass\">Ext.History</a> singleton.</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{},"linenr":7,"inheritable":null,"singleton":true,"html_meta":{},"subclasses":[],"mixins":[],"aliases":{},"members":{"cfg":[],"property":[{"meta":{},"owner":"Ext.History","name":"fieldId","id":"property-fieldId","tagname":"property"},{"meta":{},"owner":"Ext.History","name":"iframeId","id":"property-iframeId","tagname":"property"}],"css_mixin":[],"method":[{"meta":{},"owner":"Ext.History","name":"add","id":"method-add","tagname":"method"},{"meta":{},"owner":"Ext.History","name":"back","id":"method-back","tagname":"method"},{"meta":{},"owner":"Ext.util.Observable","name":"enableBubble","id":"method-enableBubble","tagname":"method"},{"meta":{},"owner":"Ext.History","name":"forward","id":"method-forward","tagname":"method"},{"meta":{},"owner":"Ext.History","name":"getToken","id":"method-getToken","tagname":"method"},{"meta":{},"owner":"Ext.History","name":"init","id":"method-init","tagname":"method"},{"meta":{},"owner":"Ext.util.Observable","name":"relayEvents","id":"method-relayEvents","tagname":"method"}],"event":[{"meta":{},"owner":"Ext.History","name":"change","id":"event-change","tagname":"event"},{"meta":{},"owner":"Ext.History","name":"ready","id":"event-ready","tagname":"event"}],"css_var":[]},"alternateClassNames":[],"override":null,"component":false,"statics":{"cfg":[],"property":[],"css_mixin":[],"method":[],"event":[],"css_var":[]},"inheritdoc":null,"private":null,"superclasses":["Ext.util.Observable"],"files":[{"href":"History.html#Ext-History","filename":"History.js"}],"name":"Ext.History","uses":[],"mixedInto":[],"id":"class-Ext.History","tagname":"class","requires":[],"enum":null});