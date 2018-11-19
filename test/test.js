var request = require('supertest');
var app = require('../IssueBot');
var IssueManager = require('../IssueManager');
const assert = require('assert');


//==================== Server tests ====================

describe('Server test', function() {
	
	it('responds {"status":"OK"} to /', function (done){
		request(app)
		.get('/')
		.set('Accept', 'application/json')
		.expect('Content-Type',/json/)
		.expect(200)
		.end(function(err,result){
			assert.equal(result.body.status, "OK");
		});
		done();
		
	});

	it('responds with the issues to /see_issues', function(done){
		request(app)
		.get('/see_issues')
		.set('Accept', 'application/json')
		.expect('Content-Type',/json/)
		.expect(200)
		.end(function(err,result){
			assert.equal(result.body.size, 0);
		});
		done();

	});


});