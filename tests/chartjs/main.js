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
	var data = Object.create(options);
	data.labels = genericData.x;
	data.datasets[0].data = genericData.y;
	return data;
};
var Chartjs;
var chart;
var ctx;
var initialize = function initialize(genericData){
	if ( ctx === undefined ) {
		$('body').append('<canvas style="width: 50%; height: 50%;" id="' + id + '"></canvas>');
		ctx = document.getElementById(id).getContext('2d');
	}
	var chart = new Chart(ctx).Line(getData(genericData), {animation: false, bezierCurve: false});
};

var terminate = function terminate(){
	$('#' + id).remove();
};

requirejs(["bower_components/Chart.js/Chart.min.js"], function(Chart) {
	generate.addTestCase({
		title: 'Chart.js',
		initialize: initialize,
		update: initialize,
		terminate: terminate,
	});
});

})();
