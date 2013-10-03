var myDate_test = TestCase.create({
    name: 'myDate_test',

    testGetDaysOfMonth: function() {

        var date = new myDate();

        date.date.setMonth(11);
        this.assertEquals(31, date.getDaysOfMonth());

        date.date.setMonth(1);
        date.date.setFullYear(2011);
        this.assertEquals(28, date.getDaysOfMonth());

        date.date.setFullYear(2012);
        this.assertEquals(29, date.getDaysOfMonth());
    },

    testAnnoBisestile: function() {

        var date = new myDate();

        date.date.setFullYear(2011);
        this.assertEquals(false, date.annoBisestile());

        date.date.setFullYear(2012);
        this.assertEquals(true, date.annoBisestile());
    },
});