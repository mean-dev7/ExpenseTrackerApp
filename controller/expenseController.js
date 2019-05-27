const mongoose=require("mongoose");

require("../model/expenseModel");

var Expense=mongoose.model("Expense");

module.exports.createxpense=(req,res,next)=>{
    var id=req.params.id;
    var newexpense=new Expense();

    // newexpense.name=req.body.name;
    newexpense.month=req.body.month;
    newexpense.amount=req.body.amount;
    //newexpense.date=req.body.date;
    newexpense.UserId=id;

    newexpense.save((err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("data inserted succesfully");
        }
        else{
            console.log(err)
            res.send(err);
        }
    });

};
//view Expenses
module.exports.viewexpense=(req,res)=>{
    Expense.find({UserId:req.params.id}).exec(function(err,doc){
        if(err)
        {
            res.send(err);
            console.log(err);
        }
        else
        res.send(doc);
    });
    };
   

