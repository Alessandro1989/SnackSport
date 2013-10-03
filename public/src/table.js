function Table(element) {
	this.element = element;
}

Table.prototype.createTable = function(snacksSport, type) {

	snacksToBeDisplayed=snacksSport.getCollection()
	var unit = "g";
	var table = "<table><caption>Cibi</caption>"
		+"<tr><th>data</th><th>nome</th><th>quantita'</th><th>calorie</th></tr>";
	
	if(type=="sports"){
		table = "<table><caption>Sport</caption>"
		+"<tr><th>data</th><th>nome</th><th>tempo</th><th>calorie</th></tr>";
		unit = "min";
	}

	for (var i = 0; i < snacksToBeDisplayed.length; i++) {
		table += "<tr>"
			+"<td>" + snacksToBeDisplayed[i].getDate() + "</td>"
			+"<td>" + snacksToBeDisplayed[i].FoodType.name +"</td>"
			+"<td>" + snacksToBeDisplayed[i].quantity + " " + unit + "</td>"
			+"<td>" + snacksToBeDisplayed[i].calories() + " kcal</td>"
			+"</tr>";
		}
	return table;
}

Table.prototype.update = function(snacksToBeDisplayed, type) {
    $(this.element).html(this.createTable(snacksToBeDisplayed, type));       
}