var generate;
$(document).ready(function(){
	generate = Generate(['ECharts', 'Chart.js']);
	$('#start').click(function(){
		generate.runBenchmark();
		$('#start').attr('disabled', 'true');
	});
});
