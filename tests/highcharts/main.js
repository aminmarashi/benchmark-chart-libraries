(function(){
var id='highchartjs';
var options = {
	plotOptions: {
		series: {
			compare: 'percent'
		},
		line: {
			animation: false
		}
	},
	chart: {
		animation: false,
		renderTo: id
	},
	
	series: [{
		data: []
	}]
};

var getData = function getData(genericData) {
	var series = [];
	genericData.x.forEach(function(x, index){
		series.push([x, genericData.y[index]])
	});

	series.sort(function (a, b) {
		if (a[0] === b[0]) {
			return 0;
		}
		else {
			return (a[0] < b[0]) ? -1 : 1;
		}
	});
	return series;
};
var chart;
var updates = 0;

var initialize = function initialize(genericData){
	if ( chart === undefined ) {
		$('body').append('<div style="width: 500px; height: 500px;" id="' + id + '"></div>');
		chart = new Highcharts.Chart(options);
	}
	chart.series[0].setData(getData(genericData));
	updates++;
};

var terminate = function terminate(){
	$('#' + id).remove();
};

var getUpdates = function getUpdates(){
	return updates;
};

requirejs(["bower_components/highcharts/highcharts.js"], function(Chart) {
	generate.addTestCase({
		title: 'Highcharts.js',
		initialize: initialize,
		update: initialize,
		terminate: terminate,
		getUpdates: getUpdates,
	});
});

})();
