const mongoose=require('mongoose');
require('./userModel');

var salary=mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    amount:{
        type:Number,
        
    },
});
mongoose.model("Salary",salary,"Addsalary")