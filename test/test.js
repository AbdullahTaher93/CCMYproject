var request = require('supertest');
var app=require("../index.js");
var alldata=require("../class.js");
assert = require('assert');

//API REST test

describe( "API REST", function() {
  it('main get, respond OK', function (done) {
  request(app)
    .get('/')
    .expect('Content-Type', 'application/json')
    .expect(200)
    done();
  });
  

  it('Get to /api', function(done){
    request(app)
      .get('/api')
      .expect('Content-Type','application/json; charset=utf-8')
      .expect(200)
      done();
  });

it('Post to /api', function(done){
    request(app)
      .post('/api')
      .send("name=abdullah&age=25&sex=M&email=AbdullahTaher@correo.ugr.es&phonenumber=0063&skills=C1,C2,C3&study=A1")
      
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });

  it('put to /api', function(done){
    request(app)
      .put('/api')
      .send("index=0&name=ali&age=23&sex=M&email=AbdullahTaher@correo.ugr.es&phonenumber=0063&skills=C1,C2,C3&study=A1")
   
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  

  it('delete to /api', function(done){
    request(app)
      .delete('/api')
      .send("index=0")
      
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  

  it('get to /api/search', function(done){
    request(app)
      .get('/api/search')
      .send("age=25")
      
      
      .expect(200)
      .end(function(err, res) {
        if (err) return done(err);
        done();
      });
  });
  



 

  

});




 

  

