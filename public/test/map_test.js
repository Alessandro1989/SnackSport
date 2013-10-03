var map_test = TestCase.create( {
    name: 'map_test',

    testSizeZero: function() {
    	var map = new Map();
        this.assertEquals(0,map.getSize());
    },

    testSize: function() {
        var map = new Map();
        map.add("primo", 1);
        map.add("secondo", 2);
        map.add("key", "one");
        map.add("key", "two");
        map.add("key", "three");
        this.assertEquals(3, map.getSize());
    },

    testGetElement: function() {
        var map = new Map();
        map.add("primo", 1);
        map.add("secondo", 2);
        map.add("key", "one");
        map.add("key", "two");
        map.add("key", "three");
        this.assertEquals([1], map.get("primo"));
        this.assertEquals([2], map.get("secondo"));
        this.assertEquals(["one","two","three"], map.get("key"));
    },

     testGetKeys: function() {
        var map = new Map();
        map.add("primo", 1);
        map.add("secondo", 2);
        map.add("key", "one");
        map.add("key", "two");
        map.add("key", "three");
        var keys = [];
        keys=map.getKeys();

        this.assertEquals("primo", keys[0]);
        this.assertEquals("secondo", keys[1]);
        this.assertEquals("key", keys[2]);
    },

    testGetOrder: function() {
        var map = new Map();
        map.add(4, "one");
        map.add(3, "two");
        map.add(5, "three");
        map.add(1, "four");
        map.add(2, "five");
        map.add(3, "six");

        var order = map.getKeyOrder();

        this.assertEquals("four", map.get(order[0])[0]);
        this.assertEquals("five", map.get(order[1])[0]);
        this.assertEquals("two", map.get(order[2])[0]);
        this.assertEquals("one", map.get(order[3])[0]);
        this.assertEquals("three", map.get(order[4])[0]);
        this.assertEquals("six", map.get(order[2])[1]);
    },

});