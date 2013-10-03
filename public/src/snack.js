//SNACK

function Snack(FoodType, quantity, user, date) {
	this.FoodType = FoodType;
	this.quantity = quantity;
	this.user = user;
	this.date = date;
	this.id;
}

Snack.prototype.calories = function() {
	return parseInt((this.FoodType.caloriesFor100Grams/100)*this.quantity);
}

Snack.prototype.getDate = function() {
	return this.date.getFullYear() + "/" + formatDate(this.date.getMonth()+1) + "/" + formatDate(this.date.getDate());
}

function formatDate(n) {
	if (n < 10) {
		return "0" + n;
	}
	return n;
}

Snack.prototype.validation = function() {

	var error = new Errors();
	var e = "vediamo: ";
	
	try {
  		if (this.FoodType.constructor != FoodType)
			error.addError("Select a food");
  	}
	catch(err) {
		//esempio se this.FoodType e' null, lancia l'eccezione
  		error.addError("Select a food");
   	}
  
	if(isNaN(this.quantity) || (this.quantity == ""))
		error.addError("Insert a numerical quantity");

	return error;
}

// SNACKCOLLECTION

function SnackCollection() {
	this.mapSnack = new Map(); 
	this.calories = 0;
	this.listeners = [];
}

SnackCollection.prototype.add = function(snack) {
	this.mapSnack.add(snack.date, snack);
	this.calories += parseInt((snack.FoodType.caloriesFor100Grams/100)*snack.quantity);
}

SnackCollection.prototype.groupByDate = function() {
	var keys = this.mapSnack.getKeyOrder();
	var groupByDate = [];
	for(var i = (this.mapSnack.getSize()-1); i >= 0; i--)
		groupByDate.push(this.getDayCollection(keys[i]));

	return groupByDate;
}

SnackCollection.prototype.getDays = function() {
	return this.mapSnack.arrayKey;
}

SnackCollection.prototype.getDayCollection = function(day) {
	return this.mapSnack.get(day);
}

SnackCollection.prototype.sumCalories = function(){
	return parseInt(this.calories);
}

SnackCollection.prototype.load = function(data, type, foodList) {
	for (var i = 0; i < data.length; i++) {
		var element = data[i];
		var quantity, foodType;

		if(type == "sport") {
			foodType = foodList.getFood(element.sport);
			quantity = element.minutes;
		}
		else {
			foodType = foodList.getFood(element.foodType);
			quantity = element.quantity;
		}
		
		var date= new Date(element.date);
		var snack = new Snack(foodType, quantity, element.user, date);
		this.add(snack);
	}
}

SnackCollection.prototype.getCollection = function() {
	var keys = this.mapSnack.getKeyOrder();
	var collection = [];
	for(var i = (this.mapSnack.getSize()-1); i >= 0; i--) {
		var dayCollection = this.getDayCollection(keys[i]);
		for(var j = dayCollection.length-1; j >= 0 ; j--)
			collection.push(dayCollection[j]);
	}
	return collection;
}

SnackCollection.prototype.dayCalories = function(day) {
	var dayCollection = this.getDayCollection(day);
	var cal = 0;
	for (var i = 0; i < dayCollection.length; i++) {
		cal += dayCollection[i].calories();
	}
	return cal;
}

SnackCollection.prototype.sumCalories = function(){
	return parseInt(this.calories);
}

SnackCollection.prototype.addListener = function(listener) {
	this.listeners.push(listener);
}

SnackCollection.prototype.notifyListeners = function(eventType) {
	for (var i = 0; i < this.listeners.length; i++) {
    	this.listeners[i](eventType);
    }
}