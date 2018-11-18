var express=require("express");
	var app = express();
    var port = process.env.PORT || 8080;
    var p=
    '<html><head><title>My project in Heroku</title></head>'+
    '<body>'+
    '<form method="post" action="/"><br>'+
    'first name:<input name="firstname"><br>'+
    '</form>'
    '</body>'+
    '</html>';

	app.get("/", function (req, res) {
        res.send( {"status":"OK","ejemplo":{"ruta":"/see_issues","valor":{"size":0}}} );
        
        
	});

	app.get("/proc", function (req, res) {
		res.send( { Portada: true } );
	});  

	app.listen(port);
	console.log("Server running at http://127.0.0.1:"+port+"/");