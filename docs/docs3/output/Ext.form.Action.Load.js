Ext.data.JsonP.Ext_form_Action_Load({"parentMixins":[],"extends":"Ext.form.Action","html":"<div><pre class=\"hierarchy\"><h4>Hierarchy</h4><div class='subclass first-child'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='docClass'>Ext.form.Action</a><div class='subclass '><strong>Ext.form.Action.Load</strong></div></div><h4>Subclasses</h4><div class='dependency'><a href='#!/api/Ext.form.Action.DirectLoad' rel='Ext.form.Action.DirectLoad' class='docClass'>Ext.form.Action.DirectLoad</a></div><h4>Files</h4><div class='dependency'><a href='source/Action2.html#Ext-form-Action-Load' target='_blank'>Action.js</a></div></pre><div class='doc-contents'><p>A class which handles loading of data from a server into the Fields of an <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a>.</p>\n\n\n<p>Instances of this class are only created by a <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Form</a> when\n<a href=\"#!/api/Ext.form.BasicForm-method-load\" rel=\"Ext.form.BasicForm-method-load\" class=\"docClass\">load</a>ing.</p>\n\n\n<p><u><b>Response Packet Criteria</b></u></p>\n\n\n<p>A response packet <b>must</b> contain:\n<div class=\"mdetail-params\"><ul>\n<li><b><code>success</code></b> property : Boolean</li>\n<li><b><code>data</code></b> property : Object</li>\n<div class=\"sub-desc\">The <code>data</code> property contains the values of Fields to load.\nThe individual value object for each Field is passed to the Field's\n<a href=\"#!/api/Ext.form.Field-method-setValue\" rel=\"Ext.form.Field-method-setValue\" class=\"docClass\">setValue</a> method.</div></li>\n</ul></div>\n<p><u><b>JSON Packets</b></u></p>\n<p>By default, response packets are assumed to be JSON, so for the following form load call:\n<pre><code>var myFormPanel = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n    title: 'Client and routing info',\n    items: [{\n        fieldLabel: 'Client',\n        name: 'clientName'\n    }, {\n        fieldLabel: 'Port of loading',\n        name: 'portOfLoading'\n    }, {\n        fieldLabel: 'Port of discharge',\n        name: 'portOfDischarge'\n    }]\n});\nmyFormPanel.<a href=\"#!/api/Ext.form.FormPanel-method-getForm\" rel=\"Ext.form.FormPanel-method-getForm\" class=\"docClass\">getForm</a>().<a href=\"#!/api/Ext.form.BasicForm-method-load\" rel=\"Ext.form.BasicForm-method-load\" class=\"docClass\">load</a>({\n    url: '/getRoutingInfo.php',\n    params: {\n        consignmentRef: myConsignmentRef\n    },\n    failure: function(form, action) {\n        Ext.Msg.alert(\"Load failed\", action.result.errorMessage);\n    }\n});\n</code></pre>\na <b>success response</b> packet may look like this:</p>\n<pre><code>{\n    success: true,\n    data: {\n        clientName: \"Fred. Olsen Lines\",\n        portOfLoading: \"FXT\",\n        portOfDischarge: \"OSL\"\n    }\n}</code></pre>\nwhile a <b>failure response</b> packet may look like this:</p>\n\n\n<pre><code>{\n    success: false,\n    errorMessage: \"Consignment reference not found\"\n}</code></pre>\n\n\n<p>Other data may be placed into the response for processing the <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Form</a>'s\ncallback or event handler methods. The object decoded from this JSON is available in the\n<a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a> property.</p>\n\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div id='cfg-failure' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-failure' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-failure' class='name expandable'>failure</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function to call when a failure packet was recieved, or when an\nerror ocurred in the Ajax communication. ...</div><div class='long'><p>The function to call when a failure packet was recieved, or when an\nerror ocurred in the Ajax communication.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a><div class=\"sub-desc\">The Action class. If an Ajax\nerror ocurred, the failure type will be in <a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a>. The <a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n</div></div></div><div id='cfg-method' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-method' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-method' class='name expandable'>method</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The HTTP method to use to access the requested URL. ...</div><div class='long'><p>The HTTP method to use to access the requested URL. Defaults to the\n<a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a>'s method, or if that is not specified, the underlying DOM form's method.</p>\n</div></div></div><div id='cfg-params' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-params' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-params' class='name expandable'>params</a><span> : Mixed</span></div><div class='description'><div class='short'>Extra parameter values to pass. ...</div><div class='long'><p>Extra parameter values to pass. These are added to the Form's\n<a href=\"#!/api/Ext.form.BasicForm-cfg-baseParams\" rel=\"Ext.form.BasicForm-cfg-baseParams\" class=\"docClass\">Ext.form.BasicForm.baseParams</a> and passed to the specified URL along with the Form's\ninput fields.</p>\n\n\n<p>Parameters are encoded as standard HTTP parameters using Ext.urlEncode.</p>\n\n</div></div></div><div id='cfg-reset' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-reset' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-reset' class='name expandable'>reset</a><span> : Boolean</span></div><div class='description'><div class='short'>When set to true, causes the Form to be\nreset on Action success. ...</div><div class='long'><p>When set to <tt><b>true</b></tt>, causes the Form to be\nreset on Action success. If specified, this happens\n<b>before</b> the <a href=\"#!/api/Ext.form.Action-cfg-success\" rel=\"Ext.form.Action-cfg-success\" class=\"docClass\">success</a> callback is called and before the Form's\nactioncomplete event fires.</p>\n</div></div></div><div id='cfg-scope' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-scope' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-scope' class='name not-expandable'>scope</a><span> : Object</span></div><div class='description'><div class='short'><p>The scope in which to call the callback functions (The <tt>this</tt> reference\nfor the callback functions).</p>\n</div><div class='long'><p>The scope in which to call the callback functions (The <tt>this</tt> reference\nfor the callback functions).</p>\n</div></div></div><div id='cfg-submitEmptyText' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-submitEmptyText' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-submitEmptyText' class='name expandable'>submitEmptyText</a><span> : Boolean</span></div><div class='description'><div class='short'>If set to true, the emptyText value will be sent with the form\nwhen it is submitted. ...</div><div class='long'><p>If set to <tt>true</tt>, the emptyText value will be sent with the form\nwhen it is submitted.  Defaults to <tt>true</tt>.</p>\n</div></div></div><div id='cfg-success' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-success' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-success' class='name expandable'>success</a><span> : <a href=\"#!/api/Function\" rel=\"Function\" class=\"docClass\">Function</a></span></div><div class='description'><div class='short'>The function to call when a valid success return packet is recieved. ...</div><div class='long'><p>The function to call when a valid success return packet is recieved.\nThe function is passed the following parameters:<ul class=\"mdetail-params\">\n<li><b>form</b> : <a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">Ext.form.BasicForm</a><div class=\"sub-desc\">The form that requested the action</div></li>\n<li><b>action</b> : <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a><div class=\"sub-desc\">The Action class. The <a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>\nproperty of this object may be examined to perform custom postprocessing.</div></li>\n</ul></p>\n</div></div></div><div id='cfg-timeout' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-timeout' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-timeout' class='name expandable'>timeout</a><span> : <a href=\"#!/api/Number\" rel=\"Number\" class=\"docClass\">Number</a></span></div><div class='description'><div class='short'>The number of seconds to wait for a server response before\nfailing with the failureType as Action.CONNECT_FAILURE. ...</div><div class='long'><p>The number of seconds to wait for a server response before\nfailing with the <a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a> as Action.CONNECT_FAILURE. If not specified,\ndefaults to the configured <tt><a href=\"#!/api/Ext.form.BasicForm-cfg-timeout\" rel=\"Ext.form.BasicForm-cfg-timeout\" class=\"docClass\">timeout</a></tt> of the\n<a href=\"#!/api/Ext.form.BasicForm\" rel=\"Ext.form.BasicForm\" class=\"docClass\">form</a>.</p>\n</div></div></div><div id='cfg-url' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-url' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-url' class='name not-expandable'>url</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The URL that the Action is to invoke.</p>\n</div><div class='long'><p>The URL that the Action is to invoke.</p>\n</div></div></div><div id='cfg-waitMsg' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-waitMsg' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-waitMsg' class='name not-expandable'>waitMsg</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The message to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div><div class='long'><p>The message to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div></div></div><div id='cfg-waitTitle' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-cfg-waitTitle' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-cfg-waitTitle' class='name not-expandable'>waitTitle</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'><p>The title to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div><div class='long'><p>The title to be displayed by a call to <a href=\"#!/api/Ext.MessageBox-method-wait\" rel=\"Ext.MessageBox-method-wait\" class=\"docClass\">Ext.MessageBox.wait</a>\nduring the time the action is being processed.</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-failureType' class='member first-child inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-failureType' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-failureType' class='name expandable'>failureType</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of failure detected will be one of these: CLIENT_INVALID,\nSERVER_INVALID, CONNECT_FAILURE, or LOAD_FAILURE. ...</div><div class='long'><p>The type of failure detected will be one of these: <a href=\"#!/api/Ext.form.Action-static-property-CLIENT_INVALID\" rel=\"Ext.form.Action-static-property-CLIENT_INVALID\" class=\"docClass\">CLIENT_INVALID</a>,\n<a href=\"#!/api/Ext.form.Action-static-property-SERVER_INVALID\" rel=\"Ext.form.Action-static-property-SERVER_INVALID\" class=\"docClass\">SERVER_INVALID</a>, <a href=\"#!/api/Ext.form.Action-static-property-CONNECT_FAILURE\" rel=\"Ext.form.Action-static-property-CONNECT_FAILURE\" class=\"docClass\">CONNECT_FAILURE</a>, or <a href=\"#!/api/Ext.form.Action-static-property-LOAD_FAILURE\" rel=\"Ext.form.Action-static-property-LOAD_FAILURE\" class=\"docClass\">LOAD_FAILURE</a>.  Usage:</p>\n\n<pre><code>var fp = new <a href=\"#!/api/Ext.form.FormPanel\" rel=\"Ext.form.FormPanel\" class=\"docClass\">Ext.form.FormPanel</a>({\n...\nbuttons: [{\n    text: 'Save',\n    formBind: true,\n    handler: function(){\n        if(fp.getForm().isValid()){\n            fp.getForm().submit({\n                url: 'form-submit.php',\n                waitMsg: 'Submitting your data...',\n                success: function(form, action){\n                    // server responded with success = true\n                    var result = action.<a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>;\n                },\n                failure: function(form, action){\n                    if (action.<a href=\"#!/api/Ext.form.Action-property-failureType\" rel=\"Ext.form.Action-property-failureType\" class=\"docClass\">failureType</a> === <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a>.<a href=\"#!/api/Ext.form.Action-static-property-CONNECT_FAILURE\" rel=\"Ext.form.Action-static-property-CONNECT_FAILURE\" class=\"docClass\">CONNECT_FAILURE</a>) {\n                        Ext.Msg.alert('Error',\n                            'Status:'+action.<a href=\"#!/api/Ext.form.Action-property-response\" rel=\"Ext.form.Action-property-response\" class=\"docClass\">response</a>.status+': '+\n                            action.<a href=\"#!/api/Ext.form.Action-property-response\" rel=\"Ext.form.Action-property-response\" class=\"docClass\">response</a>.statusText);\n                    }\n                    if (action.failureType === <a href=\"#!/api/Ext.form.Action\" rel=\"Ext.form.Action\" class=\"docClass\">Ext.form.Action</a>.<a href=\"#!/api/Ext.form.Action-static-property-SERVER_INVALID\" rel=\"Ext.form.Action-static-property-SERVER_INVALID\" class=\"docClass\">SERVER_INVALID</a>){\n                        // server responded with success = false\n                        Ext.Msg.alert('Invalid', action.<a href=\"#!/api/Ext.form.Action-property-result\" rel=\"Ext.form.Action-property-result\" class=\"docClass\">result</a>.errormsg);\n                    }\n                }\n            });\n        }\n    }\n},{\n    text: 'Reset',\n    handler: function(){\n        fp.getForm().reset();\n    }\n}]\n</code></pre>\n\n</div></div></div><div id='property-response' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-response' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-response' class='name not-expandable'>response</a><span> : Object</span></div><div class='description'><div class='short'><p>The XMLHttpRequest object used to perform the action.</p>\n</div><div class='long'><p>The XMLHttpRequest object used to perform the action.</p>\n</div></div></div><div id='property-result' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-result' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-result' class='name not-expandable'>result</a><span> : Object</span></div><div class='description'><div class='short'><p>The decoded response object containing a boolean <tt style=\"font-weight:bold\">success</tt> property and\nother, action-specific properties.</p>\n</div><div class='long'><p>The decoded response object containing a boolean <tt style=\"font-weight:bold\">success</tt> property and\nother, action-specific properties.</p>\n</div></div></div><div id='property-type' class='member  inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><a href='#!/api/Ext.form.Action' rel='Ext.form.Action' class='defined-in docClass'>Ext.form.Action</a><br/><a href='source/Action2.html#Ext-form-Action-property-type' target='_blank' class='view-source'>view source</a></div><a href='#!/api/Ext.form.Action-property-type' class='name expandable'>type</a><span> : <a href=\"#!/api/String\" rel=\"String\" class=\"docClass\">String</a></span></div><div class='description'><div class='short'>The type of action this Action instance performs. ...</div><div class='long'><p>The type of action this Action instance performs.\nCurrently only \"submit\" and \"load\" are supported.</p>\n<p>Defaults to: <code>'default'</code></p></div></div></div></div></div></div></div>","meta":{},"linenr":425,"inheritable":null,"singleton":false,"html_meta":{},"subclasses":["Ext.form.Action.DirectLoad"],"mixins":[],"aliases":{},"members":{"cfg":[{"meta":{},"owner":"Ext.form.Action","name":"failure","id":"cfg-failure","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"method","id":"cfg-method","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"params","id":"cfg-params","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"reset","id":"cfg-reset","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"scope","id":"cfg-scope","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"submitEmptyText","id":"cfg-submitEmptyText","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"success","id":"cfg-success","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"timeout","id":"cfg-timeout","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"url","id":"cfg-url","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"waitMsg","id":"cfg-waitMsg","tagname":"cfg"},{"meta":{},"owner":"Ext.form.Action","name":"waitTitle","id":"cfg-waitTitle","tagname":"cfg"}],"property":[{"meta":{},"owner":"Ext.form.Action","name":"failureType","id":"property-failureType","tagname":"property"},{"meta":{},"owner":"Ext.form.Action","name":"response","id":"property-response","tagname":"property"},{"meta":{},"owner":"Ext.form.Action","name":"result","id":"property-result","tagname":"property"},{"meta":{},"owner":"Ext.form.Action","name":"type","id":"property-type","tagname":"property"}],"css_mixin":[],"method":[],"event":[],"css_var":[]},"alternateClassNames":[],"override":null,"component":false,"statics":{"cfg":[],"property":[],"css_mixin":[],"method":[],"event":[],"css_var":[]},"inheritdoc":null,"private":null,"superclasses":["Ext.form.Action"],"files":[{"href":"Action2.html#Ext-form-Action-Load","filename":"Action.js"}],"name":"Ext.form.Action.Load","uses":[],"mixedInto":[],"id":"class-Ext.form.Action.Load","tagname":"class","requires":[],"enum":null});