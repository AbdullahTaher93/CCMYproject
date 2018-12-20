var express=require("express");
    var app = express();
    var bodyParser=require('body-parser');

    var port = process.env.PORT || 8080;

    var savedata=require("./class");
    app.set('port', port);
    app.use(express.static(__dirname + '/public'));
    
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended: false }))


    app.get('/', function (req, res) {
      res.setHeader('Content-Type', 'applicaton/json')
      var output={
                   "status": "OK",
                   "ejemplo": { "ruta": "/data",
                                "valor": { "PositionS stored ": size }
                              }
                  }
      log.info(output);
      res.send(output);
    });
    

    app.get('/api',(req,res)=>{
     
      savedata.print();
             
      res.status(200).send("it printed on console");
       });

       app.get('/api/search',(req,res)=>{
       
          savedata.search(req.body.age);
         
          res.status(200).send('The name of these age are printed in console');
           
           });
    

    

         app.post('/api',(req,res)=>{
      
            savedata.storeData(req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
            res.status(200).send(req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
             
             });

          app.put('/api',(req,res)=>{
             
              savedata.editdata(req.body.index,req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
              res.status(200).send(req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
               
               
               });


               app.delete('/api',(req,res)=>{
               
                savedata.deletdata(req.body.index);
             
                res.status(200).send('this is profile has deleted!!!');
                 
                
                 });
            
     




  
  app.listen(port, function () {

    console.log('Example app listening on port 8080!');

  });
module.exports=app;