var errors_test = TestCase.create({
    name: 'errors_test',

    testAddError: function() {

    	errors = new Errors();
    	errors.addError("uno");
    	errors.addError("due");
    	var list = errors.errorList;
        this.assertEquals("uno", errors.errorList[0]);
        this.assertEquals("due", errors.errorList[1]);
    },

    testThereAreErrors: function() {

    	errors = new Errors();
    	this.assertEquals(false, errors.thereAreErrors());
    	errors.addError("uno");
    	this.assertEquals(true, errors.thereAreErrors());
    	errors.addError("due");
        this.assertEquals(true, errors.thereAreErrors());
    },

    testGetMessage: function() {

    	errors = new Errors();
    	this.assertEquals("", errors.getMessage());
    	errors.addError("uno");
    	errors.addError("due");
    	var message = "<ul><li>uno</li><li>due</li></ul>";
    	this.assertEquals(message, errors.getMessage());
    },
});