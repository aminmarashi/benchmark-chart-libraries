var Generate = function Generate(names) {
	var getRandomData = function getRandomData(start, end){
		result = [];
		for (var i=0; i< end - start; i++) {
			result.push(parseInt(Math.random()*(end - start)) + start);
		}
		return result;
	};

	var getX = function getX(length){
		var now = parseInt((new Date().getTime())/1000);
		return getRandomData(now-length, now)
	};

	var getY = function getY(length){
		return getRandomData(0, length)
	};

	var testCases = [];
	var suite = new Benchmark.Suite;

	var runBenchmark = function runBenchmark() {
		var seen = 0;
		testCases.forEach(function(testCase){
			if ( names.indexOf(testCase.title) >= 0 ) {
				seen++;
			}
		});
		if (seen == names.length){
			// add listeners
			suite.on('cycle', function(event) {
				console.log(String(event.target));
				$('#result').append(String(event.target) + '\n');
				testCases.forEach(function(testCase, index){
					if ( testCase.title == event.target.name ) {
						testCase.terminate();
					}
					if ( index < testCases.length - 1 ) {
						var tickCount = parseInt(document.URL.split('#')[1]);
						testCases[index + 1].initialize({x:getX(tickCount), y:getY(tickCount)});
					}
				});
			})
			.on('complete', function() {
				console.log('fastest is ' + this.filter('fastest').pluck('name'));
				$('#result').append('fastest is ' + this.filter('fastest').pluck('name') + '\n');
			})
			// run async
			.run({ 'async': true });
		}
	};
	var addTestCase = function addTestCase(testCase){
		var tickCount = parseInt(document.URL.split('#')[1]);
		if (testCases.length == 0){
			testCase.initialize({x:getX(tickCount), y:getY(tickCount)});
		}
		suite.add(testCase.title, function(){	
			testCase.update({x:getX(tickCount), y:getY(tickCount)});
		});
		testCases.push(testCase);
	};
	return {
		addTestCase: addTestCase,
		runBenchmark: runBenchmark,
	};
}; 
