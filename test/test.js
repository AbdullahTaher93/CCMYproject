var http=require('http');
var m=http.createServer(function(req,res){
    res.writeHead(200);
    res.write('hola todo');
    res.end();
});
m.listen(8080);
console.log('we listen to http://127.0.0.1:8080');




	