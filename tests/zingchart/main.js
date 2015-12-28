(function(){
var id='ZingChart';
var options = {
	"type":"line",	// Specify your chart type here.
	"series":[	// Insert your series data here.
		{ "values": []}
	],
	"scale-x":{
		'labels': []
	}
};

var getData = function getData(genericData) {
	//options.series = [{'values': genericData.y}];
	//options.scale-x.labels = genericData.x;
	return genericData.y;
};
var updates = 0;

var initialize = function initialize(genericData){
	$('body').append('<div id="' + id + '"></div>');
		zingchart.render({ 
		id: id,
		data: options,
		height:500,
		width:500
	});
	updates++;
};

var update = function update(genericData){
	zingchart.exec(id, 'setseriesdata', {
		data: [{values: getData(genericData)}]
	});
	updates++;
};

var terminate = function terminate(){
	$('#' + id).remove();
};

var getUpdates = function getUpdates(){
	return updates;
};

requirejs(["bower_components/zingchart/client/zingchart.min.js"], function(zingchart) {
	generate.addTestCase({
		title: 'ZingChart',
		initialize: initialize,
		update: update,
		terminate: terminate,
		getUpdates: getUpdates,
	});
});

})();
