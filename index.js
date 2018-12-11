var express=require("express");
    var app = express();
    var body=require('body-parser');
<<<<<<< HEAD
    var port = process.env.PORT || 8080;
=======
    var port = process.env.PORT || 3000;
>>>>>>> dd0e6e26fd3a8514332437db259e6289d17c6142
    var savedata=require("./class");

    app.use(body.urlencoded({extended:false}))
    app.use(body.json())

    app.get('/',(req,res)=>{
      res.setHeader('Content-Type', 'applicaton/json')
      res.send( {"status":"OK","ejemplo":{"ruta":"/see_issues","valor":{"size":0}}} );

    });
    app.get('/api',(req,res)=>{
      res.setHeader('Content-Type', 'applicaton/json')
      savedata.print();
             
      res.send(200,"it printed on console");
       });

    app.get('/api/search',(req,res)=>{
      res.setHeader('Content-Type', 'text/html')
      savedata.search(req.body.age);
             
<<<<<<< HEAD
      res.send(200,"it printed on console!!!");
=======
      res.send(200,"it printed on console");
>>>>>>> dd0e6e26fd3a8514332437db259e6289d17c6142
       });

    

         app.post('/api',(req,res)=>{
          res.setHeader('Content-Type', 'text/html')
            savedata.storeData(req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
            res.send(200,req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
             
             });
             app.put('/api',(req,res)=>{
              res.setHeader('Content-Type', 'text/html')
              savedata.editdata(req.body.index,req.body.name,req.body.age,req.body.sex,req.body.email,req.body.phonenumber,req.body.skills,req.body.study);
           
              res.send(200,req.body.name+' '+req.body.age+' '+req.body.sex+' '+req.body.email+' '+req.body.phonenumber+' '+req.body.skills+' '+req.body.study);
               
               
               });


               app.delete('/api',(req,res)=>{
                res.setHeader('Content-Type', 'text/html')
                savedata.deletdata(req.body.index);
             
                res.send(200,'this is profile has deleted!!!');
                 
                 
                 });
            
     




  
  app.listen(port, function () {
<<<<<<< HEAD
    console.log('Example app listening on port 8080!');
=======
    console.log('Example app listening on port 3000!');
>>>>>>> dd0e6e26fd3a8514332437db259e6289d17c6142
  });
module.exports=app;