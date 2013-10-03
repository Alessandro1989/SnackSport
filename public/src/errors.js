function Errors() {
	this.errorList = [];
	this.size = 0;
}

Errors.prototype.addError = function(message) {
	this.errorList[this.size++] = message;
}

Errors.prototype.thereAreErrors = function(message) {
	if (this.size == 0)
		return false;
	return true;
}

Errors.prototype.getMessage = function() {
    var message = "<ul>";
	for(i = 0; i < this.size; i++)
		message += "<li>" + this.errorList[i] + "</li>";
	message += "</ul>"
	if (message == "<ul></ul>")
		message = "";
	return message;
}