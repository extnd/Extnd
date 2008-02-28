
/** 
 * @class Ext.nd.UIDocument
 * Provides JavaScript access to an object that mimics NotesUIDocument in Lotuscript.
 * This object is created from the UIDocument agent within the notes database and
 * provides values specific to the document unid passed to the agent.
 * You cannot create an instance of this object, and all properties are read-only.
 * @singleton
 */
Ext.nd.UIDocument.prototype = function() {
  return {
	  /**
	   * HTML Form dom node for the notes form (first form on the page). Read-only.
	   * @type {Object}
	   */
	  form : frm, 
	  /**
	   * True for editing, false for reading. Read-only.
	   * @type {Boolean}
	   */
	  editMode : false,
	  /**
	   * same as ISNEWDOC. Read-only.
	   * @type {Boolean}
	   */
	  isNewDoc : false,
	  /**
	   * first listed name of the form. Read-only.
	   * @type String
	   */
	  formName : 'CategoryTest1',

    /**
     * @class Ext.nd.UIDocument.document
     */
	  document : {
		  /**
		   * document created on datetime. Read-only.
		   * @type Date
		   */
	    created : "2/23/2007 1:24:25 PM", 
		  /**
		   * document last accessed datetime. Read-only.
		   * @type Date
		   */
	    lastAccessed : "2/10/2008 1:42:49 PM",
		  /**
		   * document last modified datetime
		   * @type Date
		   */
		  lastModified : "2/10/2008 1:42:49 PM",
		  /**
		   * document note id.  Read-only.
		   * @type String
		   */
		  noteID : "93A",
		  /**
		   * document unique id.  Read-only.
		   * @type String
		   */
		  universalID : "0035EF08F21EFB058525728B00651CF8",
		  /**
		   * items array, contains objects with all of the fields and values
		   * from the document.
		   * Example item: {"name" : "subject", "type": 1280, "values" : ["Some subject"]}
		   * @type Array
		   */
		  items : [
			  {"name" : "$WebFlags", "type" : 1280, "values" : []}, 
				{"name" : "cat3", "type" : 1280, "values" : []}, 
				{"name" : "cat1", "type" : 1280, "values" : []}, 
				{"name" : "checkbox", "type" : 1280, "values" : []}, 
				{"name" : "cat2", "type" : 1280, "values" : []}, 
				{"name" : "subject", "type" : 1280, "values" : []}, 
				{"name" : "typeahead", "type" : 1280, "values" : []}, 
				{"name" : "multi", "type" : 1280, "values" : []}, 
				{"name" : "namepicker", "type" : 1280, "values" : []}, 
				{"name" : "somedate", "type" : 1024, "values" : []}, 
				{"name" : "readerChoices", "type" : 1280, "values" : []}, 
				{"name" : "_readers", "type" : 1075, "values" : []}, 
				{"name" : "form", "type" : 1280, "values" : []}, 
				{"name" : "$UpdatedBy", "type" : 1074, "values" : []}, 
				{"name" : "$Revisions", "type" : 1024, "values" : []}
	    ]
	  }
	}
};
