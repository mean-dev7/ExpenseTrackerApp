const mongoose=require('mongoose');
require('./userModel');

var expense=mongoose.Schema({
    // name:{
    //     type:String,
        
    //     },
  UserId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:'User'
  },
    month:{
            type:String,
            
            },
    amount:{
        type:Number,
       
    },
    date:{
        type:Date,
        default:Date.now()
    },
});
 mongoose.model("Expense",expense,"Addexpense")