require('./model/db');
require('./config/passportConfig');
const cors=require('cors');

const express=require('express');
const bodyParser=require('body-parser');
 const rtsindex=require('./routers/userRouter');
 const passport=require('passport');


 var app=express();
 app.use(cors());

app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use('/users',rtsindex);
//  app.get('/',function(req,res){
//      res.sendFile(__dirname+"/form.html")
//  });
app.get('/login',function(req,res){
         res.sendFile(__dirname+"/login.html")
      });
// app.get('/add',function(req,res){
//     res.sendFile(__dirname+"/addexpense.html")
// });
// app.get('/salary',function(req,res){
//     res.sendFile(__dirname+"/salary.html")
// });
// app.get('/addcat',function(req,res){
//     res.sendFile(__dirname+"/addcat.html")
// });

 app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

 app.use(passport.initialize());
app.listen(3000,()=>{console.log("server is running at 3000")});