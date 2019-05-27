const mongoose=require('mongoose');
require('./userModel');

var addcat=mongoose.Schema({
    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    name:{
        type:String,
    },
    amount:{
        type:Number
    },

});
mongoose.model("Addcat",addcat,"Addcat")