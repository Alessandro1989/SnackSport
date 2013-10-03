var snacks;
var sports;
var	errors;
var	foodList;
var	currentDate;
var newSnacks;
var newSports;
var body;

$(document).ready(function() {
	
	$("#idUser").val(window.location.pathname.substring(7));

	snacks = new SnackCollection();
	sports = new SnackCollection();
	errors = new Errors();

	foodList = new FoodList();
	currentDate = new myDate();
	newSnacks = [];
	newSports = [];

	addListeners();

	loadTypes();
	loadMeals();
	loadSports();
	
	currentDate.currentDateGenerator("#selectYear", "#selectMonth", "#selectDay");

	$("#type").change(function() {
		loadList($(this).val());
	}).change();

	$("#selectMonth").change(function() {
		currentDate.date.setMonth($(this).val());
		currentDate.checkForDayChanges("#selectDay");
	}).change();

	$("#selectYear").change(function() {
		currentDate.date.setFullYear($(this).val());
		if(currentDate.date.getMonth() == 1)
			currentDate.checkForDayChanges("#selectDay");
	}).change();
	
	$("#addSnack").submit(confirm);

	$("#save").click(savedate);

});

function addListeners() {
	
	snacks.addListener(function() {
    	$("#error").html(errors.getMessage());
	});

	sports.addListener(function() {
    	$("#error").html(errors.getMessage());
	});

	snacks.addListener(function() {
	  	new Table("#table").update(snacks, "snacks");      	
	});

	sports.addListener(function() {
	  	new Table("#tablesport").update(sports,"sports");      	
	});

	snacks.addListener(function() {
	  	new Graph("#placeholder").update(snacks, sports);     	
	});

	sports.addListener(function() {
	  	new Graph("#placeholder").update(snacks, sports);     	
	});
}

function loadMeals() {
	$.ajax({
	  url: '/snacks/'+window.location.pathname.substring(7),
	  success: function(data) {
			snacks.load(data, "snacks", foodList);
	    	snacks.notifyListeners();
	  },
	  error: function(xhr, textStatus, errorThrown) {
	  		errors.addError("Error: " + textStatus + "; errorThrown " + errorThrown);
	  		snacks.notifyListeners();
	  },
	});
}

function loadSports() {
	$.ajax({
	  url: '/sports/'+window.location.pathname.substring(7),
	  success: function(data) {
			sports.load(data, "sport", foodList);
	    	sports.notifyListeners();
	  },
	  error: function(xhr, textStatus, errorThrown) {
	  		errors.addError("Error: " + textStatus + "; errorThrown " + errorThrown);
	  		sports.notifyListeners();
	  },
	});
}

function loadTypes() {
	var list = foodList.list;
	for(var i = 0; i < list.length; i++)
		$("#type").append("<option value=\"" + list[i] + "\">" + list[i] + "</option>");
}

function loadList(type) {
	$("#idSelectFood").html("<option value=\"NoValue\"></option>");
	var list = foodList.getList(type);
	var max = list.length;
	for(var i = 0; i < list.length; i++)
		$("#idSelectFood").append("<option value=\"" + list[i].name + "\">" + list[i].name + "</option>");
}

function sendDate(querystring) {
	$.ajax({
			url: '/nourl/',
			type: 'POST',
			data: querystring,
			success: function(xhr, textStatus, errorThrown) {
			  		errors.addError("salvataggio riuscito");
			  		snacks.notifyListeners();
			},
			error: function(xhr, textStatus, errorThrown) {
			  		errors.addError("Error: " + textStatus + "; errorThrown " + errorThrown);
			  		errors.addError("salvataggio non riuscito");
			  		snacks.notifyListeners();
			},
	});	
}

function confirm() {
	var date = new Date($("#selectYear").val(), $("#selectMonth").val(), $("#selectDay").val());
	addSnack(date, $("#idSelectFood").val(), $("#idQuantity").val());
	return false;
}

function addSnack(date, nameFood, quantity) {	

		var lastSnack = new Snack(foodList.getFood(nameFood), quantity, "username", date);
		errors = lastSnack.validation();

		if(!errors.thereAreErrors()) {
			if($("#type").val() == "sport") {
				sports.add(lastSnack);
				newSports.push(lastSnack);
			} else {
				snacks.add(lastSnack);
				newSnacks.push(lastSnack);
			}
		}
		snacks.notifyListeners();
		sports.notifyListeners();
}

function savedate() {
	
	if(newSnacks.length > 0)
		serializeDate(newSnacks, "snacks");
	
	if(newSports.length > 0)
		serializeDate(newSports, "sport");
	
	newSnacks = [];
	newSports = [];

	return false;	
}

function serializeDate(array, type) {
	var querystring = "type=" + type + "&user="+window.location.pathname.substring(7) + "&size=" + array.length;
		
	for(var i = 0; i < array.length; i++) {
		querystring += "&snack[" + i + "]=" + array[i].FoodType.name + ";" + array[i].quantity + ";" +
						array[i].date.getFullYear() + "/" + (array[i].date.getMonth()+1) + "/" + (array[i].date.getDate());
	}
	console.log(querystring);
	sendDate(querystring);
}

