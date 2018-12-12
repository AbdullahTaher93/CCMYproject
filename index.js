var express=require("express");
    var app = express();
    var body=require('body-parser');

    var port = process.env.PORT || 8080;

    var savedata=require("./class");
    app.set('port', port);
    app.use(express.static(__dirname + '/public'));
    app.use(express.urlencoded());
    app.use(body.urlencoded({extended:false}))
    app.use(body.json())

    app.get('/',(req,res)=>{
     
      res.send( {"status":"OK","ejemplo":{"ruta":"/see_issues","valor":{"size":0}}} );
       
    });
    

    app.get('/api',(req,res)=>{
     
      savedata.print();
             
      res.send(200,"it printed on console");
       });

       app.get('/api/search',(req,res)=>{
       
          savedata.search(req.body.age);
         
          res.send(200,'The name of these age are printed in console');
           
           });
    

    

         app.post('/api',(req,res)=>{
      
            savedata.storeData(req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
            res.send(200,req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
             
             });
             app.put('/api',(req,res)=>{
             
              savedata.editdata(req.body.index,req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
              res.send(200,req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
               
               
               });


               app.delete('/api',(req,res)=>{
               
                savedata.deletdata(req.body.index);
             
                res.send(200,'this is profile has deleted!!!');
                 
                 
                 });
            
     




  
  app.listen(port, function () {

    console.log('Example app listening on port 8080!');

  });
module.exports=app;