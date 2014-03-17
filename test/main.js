var should = require('should');
var logger = require('../lib/main');


describe('node-log', function() {
	describe('no arguements', function() {
		it('uses default settings', function() {
			 var result = logger();
			 console.log(result);
		});
	});
});

