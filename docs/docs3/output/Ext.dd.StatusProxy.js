Ext.data.JsonP.Ext_dd_StatusProxy({"parentMixins":[],"extends":null,"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/StatusProxy.html#Ext-dd-StatusProxy' target='_blank'>StatusProxy.js</a></div></pre><div class='doc-contents'><p>A specialized drag proxy that supports a drop status icon, <a href=\"#!/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a> styles and auto-repair.  This is the\ndefault drag proxy used by all Ext.dd components.</p>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-dropAllowed' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-cfg-dropAllowed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-cfg-dropAllowed' class='name expandable'>dropAllowed</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\"). ...</div><div class='long'><p>The CSS class to apply to the status element when drop is allowed (defaults to \"x-dd-drop-ok\").</p>\n<p>Defaults to: <code>&quot;x-dd-drop-ok&quot;</code></p></div></div></div><div id='cfg-dropNotAllowed' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-cfg-dropNotAllowed' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-cfg-dropNotAllowed' class='name expandable'>dropNotAllowed</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\"). ...</div><div class='long'><p>The CSS class to apply to the status element when drop is not allowed (defaults to \"x-dd-drop-nodrop\").</p>\n<p>Defaults to: <code>&quot;x-dd-drop-nodrop&quot;</code></p></div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-constructor' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-constructor' target='_blank' class='view-source'>view source</a></div><strong class='new-keyword'>new</strong><a href='#!/api/Ext.dd.StatusProxy-method-constructor' class='name expandable'>Ext.dd.StatusProxy</a>( <span class='pre'>config</span> ) : <a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></div><div class='description'><div class='short'> ...</div><div class='long'>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>config</span> : Object<div class='sub-desc'>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.dd.StatusProxy\" rel=\"Ext.dd.StatusProxy\" class=\"docClass\">Ext.dd.StatusProxy</a></span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-getEl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-getEl' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-getEl' class='name expandable'>getEl</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></div><div class='description'><div class='short'>Returns the underlying proxy Ext.Layer ...</div><div class='long'><p>Returns the underlying proxy <a href=\"#!/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Layer\" rel=\"Ext.Layer\" class=\"docClass\">Ext.Layer</a></span><div class='sub-desc'><p>el</p>\n</div></li></ul></div></div></div><div id='method-getGhost' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-getGhost' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-getGhost' class='name expandable'>getGhost</a>( <span class='pre'></span> ) : <a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></div><div class='description'><div class='short'>Returns the ghost element ...</div><div class='long'><p>Returns the ghost element</p>\n<h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/Ext.Element\" rel=\"Ext.Element\" class=\"docClass\">Ext.Element</a></span><div class='sub-desc'><p>el</p>\n</div></li></ul></div></div></div><div id='method-hide' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-hide' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-hide' class='name expandable'>hide</a>( <span class='pre'>clear</span> )</div><div class='description'><div class='short'>Hides the proxy ...</div><div class='long'><p>Hides the proxy</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clear</span> : Boolean<div class='sub-desc'><p>True to reset the status and clear the ghost contents, false to preserve them</p>\n</div></li></ul></div></div></div><div id='method-repair' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-repair' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-repair' class='name expandable'>repair</a>( <span class='pre'>xy, callback, scope</span> )</div><div class='description'><div class='short'>Causes the proxy to return to its position of origin via an animation. ...</div><div class='long'><p>Causes the proxy to return to its position of origin via an animation.  Should be called after an\ninvalid drop operation by the item being dragged.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>xy</span> : Array<div class='sub-desc'><p>The XY position of the element ([x, y])</p>\n</div></li><li><span class='pre'>callback</span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a><div class='sub-desc'><p>The function to call after the repair is complete.</p>\n</div></li><li><span class='pre'>scope</span> : Object<div class='sub-desc'><p>The scope (<code>this</code> reference) in which the callback function is executed. Defaults to the browser window.</p>\n</div></li></ul></div></div></div><div id='method-reset' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-reset' class='name expandable'>reset</a>( <span class='pre'>clearGhost</span> )</div><div class='description'><div class='short'>Resets the status indicator to the default dropNotAllowed value ...</div><div class='long'><p>Resets the status indicator to the default dropNotAllowed value</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>clearGhost</span> : Boolean<div class='sub-desc'><p>True to also remove all content from the ghost, false to preserve it</p>\n</div></li></ul></div></div></div><div id='method-setStatus' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-setStatus' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-setStatus' class='name expandable'>setStatus</a>( <span class='pre'>cssClass</span> )</div><div class='description'><div class='short'>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target e...</div><div class='long'><p>Updates the proxy's visual element to indicate the status of whether or not drop is allowed\nover the current target element.</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>cssClass</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a><div class='sub-desc'><p>The css class for the new drop status indicator image</p>\n</div></li></ul></div></div></div><div id='method-show' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-show' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-show' class='name expandable'>show</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Displays this proxy ...</div><div class='long'><p>Displays this proxy</p>\n</div></div></div><div id='method-stop' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-stop' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-stop' class='name expandable'>stop</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Stops the repair animation if it's currently running ...</div><div class='long'><p>Stops the repair animation if it's currently running</p>\n</div></div></div><div id='method-sync' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-sync' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-sync' class='name expandable'>sync</a>( <span class='pre'></span> )</div><div class='description'><div class='short'>Force the Layer to sync its shadow and shim positions to the element ...</div><div class='long'><p>Force the Layer to sync its shadow and shim positions to the element</p>\n</div></div></div><div id='method-update' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='Ext.dd.StatusProxy'>Ext.dd.StatusProxy</span><br/><a href='source/StatusProxy.html#Ext-dd-StatusProxy-method-update' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.dd.StatusProxy-method-update' class='name expandable'>update</a>( <span class='pre'>html</span> )</div><div class='description'><div class='short'>Updates the contents of the ghost element ...</div><div class='long'><p>Updates the contents of the ghost element</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>html</span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a>/HTMLElement<div class='sub-desc'><p>The html that will replace the current innerHTML of the ghost element, or a\nDOM node to append as the child of the ghost element (in which case the innerHTML will be cleared first).</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{},"linenr":7,"inheritable":null,"singleton":false,"html_meta":{},"subclasses":[],"mixins":[],"aliases":{},"members":{"cfg":[{"meta":{},"owner":"Ext.dd.StatusProxy","name":"dropAllowed","id":"cfg-dropAllowed","tagname":"cfg"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"dropNotAllowed","id":"cfg-dropNotAllowed","tagname":"cfg"}],"property":[],"css_mixin":[],"method":[{"meta":{},"owner":"Ext.dd.StatusProxy","name":"constructor","id":"method-constructor","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"getEl","id":"method-getEl","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"getGhost","id":"method-getGhost","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"hide","id":"method-hide","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"repair","id":"method-repair","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"reset","id":"method-reset","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"setStatus","id":"method-setStatus","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"show","id":"method-show","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"stop","id":"method-stop","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"sync","id":"method-sync","tagname":"method"},{"meta":{},"owner":"Ext.dd.StatusProxy","name":"update","id":"method-update","tagname":"method"}],"event":[],"css_var":[]},"alternateClassNames":[],"override":null,"component":false,"statics":{"cfg":[],"property":[],"css_mixin":[],"method":[],"event":[],"css_var":[]},"inheritdoc":null,"private":null,"superclasses":[],"files":[{"href":"StatusProxy.html#Ext-dd-StatusProxy","filename":"StatusProxy.js"}],"name":"Ext.dd.StatusProxy","uses":[],"mixedInto":[],"id":"class-Ext.dd.StatusProxy","tagname":"class","requires":[],"enum":null});