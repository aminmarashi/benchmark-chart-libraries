var generate;
$(document).ready(function(){
	generate = Generate(['ECharts', 'Chart.js', 'Highcharts.js']);
	$('#start').click(function(){
		generate.runBenchmark();
		$('#start').attr('disabled', 'true');
	});
});
