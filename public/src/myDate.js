function myDate() {
	this.date = new Date();
}

myDate.prototype.currentDateGenerator = function(year, month, day) {
	$(year).append("<option value=\"" + this.date.getFullYear() + "\">" + this.date.getFullYear() + "</option>");
	$(month).append("<option value=\"" + formatDate((this.date.getMonth())) + "\">" + formatDate((this.date.getMonth()+1)) + "</option>");
	$(day).append("<option value=\"" + formatDate(this.date.getDate()) + "\">" + formatDate(this.date.getDate()) + "</option>");

	$(year).append("<option value=\"" + (this.date.getFullYear()-1) + "\">" + (this.date.getFullYear()-1) + "</option>");
	for(var i = 0; i < 12; i++)
		$(month).append("<option value=\"" + i + "\">" + formatDate(i+1) + "</option>");
	for(var i = 1; i <= this.getDaysOfMonth(this.date.getMonth(), this.date.getFullYear()); i++)
		$(day).append("<option value=\"" + i + "\">" + formatDate(i) + "</option>");
}

myDate.prototype.checkForDayChanges = function(day) {
	var daysOfMonth = this.getDaysOfMonth(this.date.getMonth(), this.date.getFullYear());

	if(this.date.getDate() <= daysOfMonth)
	  	$(day).html("<option value=\"" + this.date.getDate() + "\">" + this.date.getDate() + "</option>");
	else
	  	$(day).html(""); 
	
	for(var i = 1; i <= daysOfMonth; i++)
		$(day).append("<option value=\"" + i + "\">" + formatDate(i) + "</option>");
}

myDate.prototype.getDaysOfMonth = function() {
	var m = this.date.getMonth();
	if(m == 10 || m == 3 || m == 5 || m == 8)
		return 30;
	if(m == 1) {
		if (this.annoBisestile())
			return 29;
		else
			return 28
	}
	else
		return 31;
}

myDate.prototype.annoBisestile = function() {
	return (((this.date.getFullYear() % 4 == 0) && ( (!(this.date.getFullYear() % 100 == 0)) || (this.date.getFullYear() % 400 == 0))) ? true : false );
}