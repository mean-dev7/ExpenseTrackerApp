const mongoose=require('mongoose');

mongoose.connect("mongodb://localhost:27017/expensetracker",{useCreateIndex:true,useNewUrlParser:true},(err)=>{
    if(!err)
    {
        console.log("mongoDB connected succesfully");
    }
    else{
        console.log("error in connection with mongoDB");
    }
});