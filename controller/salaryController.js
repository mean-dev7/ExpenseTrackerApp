const mongoose=require('mongoose');

require('../model/salaryModel');

var Salary=mongoose.model("Salary");
module.exports.createsalary=(req,res,next)=>{
    var newsalary=new Salary();
    newsalary.amount=req.body.amount;
    newsalary.UserId=req.body.UserId;
        newsalary.save((err,doc)=>{
            if(!err){
                res.send(doc);
                console.log("Amount inserted succesfully");
            }
            else{
                console.log(err)
                res.send(err);
            }
        });
};

module.exports.viewsalary=(req,res)=>{
    Salary.find({UserId:req.params.id}).exec(function(err,doc){
        if(err)
        {
            res.send(err);
            console.log(err);
        }
        else
        res.send(doc);
    });
    };
