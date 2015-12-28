var generate;
$(document).ready(function(){
	generate = Generate(['ECharts', 'Chart.js', 'Highcharts.js', 'ZingChart']);
	$('#start').click(function(){
		generate.runBenchmark();
		$('#start').attr('disabled', 'true');
	});
});
