function Graph(element) {
	this.element = element;
	this.dataSnacks = [];
	this.dataSports = [];

	var msOneDay = 86400000;
	var tenDaysBefore = (new Date().getTime())-msOneDay*10-30000000;

	this.options = {

		series: {

			stack: 0,

			lines: {
				show: false,
				steps: false
			},

			bars: {
				show: true,
				fill: true,
				barWidth: 50,
				align: 'center',
			},

    	},

		xaxis: {
    		mode: "time",
    		timeFormat: "%b/%0d",
            min: tenDaysBefore,
            max: new Date().getTime()+30000000,
            tickLength: 0,
  		},

  		yaxis: {
  			min: 0,
    		max: 3500,
    		ticks: 5,
    		panRange: false
  		},

  		colors: ["green", "red"],

  		grid: {
  			backgroundColor: { colors: ["lightblue", "white"] },
  		},

  		pan: {
    		interactive: true,
    		cursor: "move",
  		},

	};

	this.formattedData = [
	{
		data: this.dataSnacks,
		bars: { show: true, fill: true, barWidth: msOneDay/3 },
		label: "Calorie assunte",
	},
	{
		data: this.dataSports,
		bars: { show: true, fill: true, barWidth: msOneDay/3 },
		label: "Calorie consumate",
	}
	];
}

Graph.prototype.setData = function(snacks, sports) {
	var days = snacks.getDays();
	for (var i = 0; i < days.length; i++) {
		this.dataSnacks[i] = [days[i].getTime()-14000000, snacks.dayCalories(days[i])];
	}
	var days2 = sports.getDays();
	for (var i = 0; i < days2.length; i++) {
		this.dataSports[i] = [days2[i].getTime()+22000000, sports.dayCalories(days2[i])];
	}

}

Graph.prototype.update = function(snacks, sports) {
	this.setData(snacks, sports);


	
    $.plot($(this.element), this.formattedData, this.options);
}