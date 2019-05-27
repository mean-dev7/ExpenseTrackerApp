const mongoose=require('mongoose');

require('../model/addCatModel');

var Addcat=mongoose.model("Addcat");

module.exports.createaddcat=(req,res,next)=>{
    var newaddcat=new Addcat();
    newaddcat.name=req.body.name;
    newaddcat.amount=req.body.amount;
    newaddcat.UserId=req.body.UserId;

    newaddcat.save((err,doc)=>{
        if(!err){
            res.send(doc);
            console.log("Category inserted succsfully");
        }
        else{
            console.log(err)
            res.send(err);
        }
    });
};
