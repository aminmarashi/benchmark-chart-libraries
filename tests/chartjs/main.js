(function(){
var id='chartjs';
var options = {
	labels: [],
	datasets: [
		{
			fillColor: "rgba(220,220,220,0.2)",
			strokeColor: "rgba(220,220,220,1)",
			pointColor: "rgba(220,220,220,1)",
			pointStrokeColor: "#fff",
			pointHighlightFill: "#fff",
			pointHighlightStroke: "rgba(220,220,220,1)",
			data: [] 
		}
	]
};
var getData = function getData(genericData) {
	options.labels = genericData.x;
	options.datasets[0].data = genericData.y;
	return options;
};
var chart;
var ctx;
var updates = 0;
var chartOptions = {
	animation: false,
	bezierCurve : false,
	datasetFill : false,
	showTooltips: false,
	keepAspectRatio: false,
	pointDot : false,
	scaleLabel: function(valueContainer){return ''},
};

var initialize = function initialize(genericData){
	if ( ctx === undefined ) {
		$('body').append('<canvas style="width: 500px; height: 500px;" id="' + id + '"></canvas>');
		ctx = document.getElementById(id).getContext('2d');
		chart = new Chart(ctx);
	}
	chart.Line(getData(genericData), chartOptions);
	updates++;
};

var terminate = function terminate(){
	$('#' + id).remove();
};

var getUpdates = function getUpdates(){
	return updates;
};

requirejs(["bower_components/Chart.js/Chart.min.js"], function(Chart) {
	generate.addTestCase({
		title: 'Chart.js',
		initialize: initialize,
		update: initialize,
		terminate: terminate,
		getUpdates: getUpdates,
	});
});

})();
