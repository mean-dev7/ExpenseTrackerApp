const mongoose=require("mongoose");
//require("../config/adminpassportConfig");
const passport=require('passport');


const _=require('lodash');
require("../model/adminModel");


var Admin=mongoose.model("Admin");

module.exports.admincreatenew=(req,res,next)=>{
    var newadmin=new Admin();
    newadmin.name=req.body.name;
    newadmin.email=req.body.email;
    newadmin.password=req.body.password;
    
    newadmin.save((err,doc)=>{
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
module.exports.viewadmin=(req,res)=>{
    Admin.find((err,user)=>{
        if(err)
        {
            res.send(err);
            console.log(err);
        }
        else
        return res.status(200).send(user);
        console.log(user);
    });
};
admin.methods.verifypassword=function(password){
    if(password==this.password)
    {
        return true;
    }
    else
    {
        return false;
    }
};
// module.exports.adminverify=(req,res)=>{
//     Admin.find((err,user)=>{
//         if(password==this.password)
//         {
//             return true;
//         }
//         else
//         {
//             return false;
//         }

//     });
// };


    
    