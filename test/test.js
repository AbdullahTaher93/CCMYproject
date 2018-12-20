var request = require('supertest');
var app=require("../index.js");
var alldata=require("../class.js");
assert = require('assert');

//API REST test

describe( "API REST", function() {

  	it('responds {"status":"OK"} to /', function (done){
		request(app)
			.get('/')
			.set('Accept', 'application/json')
			.expect('Content-Type',/json/)
			.expect(function(res){
				if( res.body.status != "OK" ) throw new Error ("The service is not OK");
			})
			.expect(200);
      done();
	});
  
});

  






 

  

