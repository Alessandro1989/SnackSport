function Map() {
	this.map = [];
	this.size = 0;
	this.arrayKey = [];
}

Map.prototype.add = function (key, value){
	
	var array = [];
	if(this.map[key] == null)
		this.arrayKey.push(key);
	else
		array = this.map[key];

	array.push(value);		
	this.map[key] = array;
}

Map.prototype.get = function(key) {
	return this.map[key];
}

Map.prototype.getSize = function(key) {
	return this.arrayKey.length;
}

Map.prototype.getKeys = function() {
	return this.arrayKey;
}


Map.prototype.getKeyOrder = function() {
	var array = this.arrayKey;
	var i, j, min, temp;
	for(i = 0; i < array.length; i++) {
		min = i;
		for(j = i+1; j <= array.length; j++)
			if(array[j] < array[min])
				min = j;
		if(min != i) {
			temp = array[i];
			array[i] = array[min];
			array[min] = temp;
		}
	}
	return array;
}