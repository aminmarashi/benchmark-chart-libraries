(function(){
var id='echarts';
var updates = 0;
var option = {
	tooltip: {
		show: true
	},
	xAxis : [
		{
			type : 'category',
			data : []
		}
	],
	yAxis : [
		{
			type : 'value'
		}
	],
	series : [
		{
			"name":"chart",
			"type":"line",
			"data":[]
		}
	],
	animation: false
};
					
var getData = function getData(genericData) {
	option.xAxis[0].data = genericData.x;
	option.series[0].data = genericData.y;
	return option;
};
var chart;

var update = function update(genericData){
	chart.setOption(getData(genericData));
	updates++;
};

var initialize = function initialize(genericData){
	chart.setOption(getData(genericData));
	updates++;
};

var terminate = function terminate(){
	$('#' + id).remove();
};

var getUpdates = function getUpdates(){
	return updates;
};

require.config({
	paths: {
		echarts: './js/vendor/echarts'
	}
});
require(
	[
		'echarts',
		'echarts/chart/line'   // load-on-demand, don't forget the Magic switch type.
	],
	function (ec) {
		$('body').append('<div style="width: 700px; height: 700px;" id="' + id + '"></div>');
		chart = ec.init(document.getElementById(id));
		chart.setOption(option);
		console.log(chart);
		generate.addTestCase({
			title: 'ECharts',
			initialize: initialize,
			update: update,
			terminate: terminate,
			getUpdates: getUpdates,
		});
	}
);

})();
