require('.backend/model/db');
require('./backend/config/passportConfig');
const cors=require('cors');

const express=require('express');
const bodyParser=require('body-parser');
 const rtsindex=require('./backend/routers/userRouter');
 const passport=require('passport');
 const path = require('path');

app.use(express.static(__dirname + '/dist/ExpenseTrackerApp'));
 var app=express();
 app.use(cors());




app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({extended:true}));
 app.use('/users',rtsindex);
 
 
 app.get('/',function(req,res){
     res.sendFile(path.joine(__dirname+"/dist/ExpenseTrackerApp/index.html")
 });


 app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin',"*");
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
});

 app.use(passport.initialize());
app.listen(8080,()=>{console.log("server is running at 3000")});