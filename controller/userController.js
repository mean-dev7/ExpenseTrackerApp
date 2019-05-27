const mongoose=require("mongoose");

const _=require('lodash');
require("../model/userModel");
//require("../model/imagemodel");
const passport=require('passport');

const localpassport=require('passport-local').Strategy;
const multer=require('multer');
const fs=require('fs');
//var imageUser=mongoose.model('imagesdata');
var User=mongoose.model("User");


passport.use(
    new localpassport({usernameField:'email'},
    (username,password,done)=>{
        User.findOne({email:username},
            (err,user)=>{
                if(err)
                return done(err);
                else if (!user)
                return done (null,false,{massage:'username is not registered'});
                 else if (!user.verifypassword(password))
                 return done(null,false,{message:"Wrong password"});


                 else 
                return done (null,user);
            });
    })
); 




module.exports.createnew=(req,res,next)=>{
    var newuser=new User();
    newuser.fname=req.body.fname;
    newuser.lname=req.body.lname;
    newuser.email=req.body.email;
    newuser.password=req.body.pswd;
    

    newuser.save((err,doc)=>{
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
//view users
module.exports.viewall=(req,res,next)=>{
    User.find({UserId:req.params.id}).exec(function(err,doc){
        if(err)
        {
            res.send(err);
            console.log(err);
        }
        else
        res.send(doc);
    });
};
module.exports.delete=(req,res)=>{
    User.findByIdAndDelete(req.params.id,(err,doc)=>{
        if(err){
            res.send(err);
            console.log(err);
        }
        else{
            console.log("data deleted");
            res.send(doc);
        };
    });
};

module.exports.authenticate=(req,res,next)=>{
    passport.authenticate('local',(err,user,info)=>{
        if(err)return res.status(404).json(err);
        if (user)return res.status(200).json({"token":user.generateJwtSign(),"id":_.pick(user,['_id'])});
        else return res.status(401).json(info);
    })
    (req,res);
    };
    module.exports.userprofile=(req,res,next)=>{
        User.findOne({_id:req._id},(err,user)=>{
            if(err)
            return res.status(404).send(err);
            else if(!user)
            return res.status(404).json({status:false,message:'user record not found'});
            else 
            return res.status(200).json({status:true,user:_.pick(user,['_id'])});
        });
    }
    


//     let storage = multer.diskStorage({
//         destination: (req, file, cb) => {
//           cb(null, './uploads');
//         },
//         filename: (req, file, cb) => {
//           cb(null, file.originalname);
//         }
//     });
    
//     var upload =multer({storage:storage}).single('photo');


// module.exports.uploadfile=(req,res)=>{
//     if(!req.file)
//     {
//         console.log("please select file");
//     }
//     else
//     {
//     upload(req,res,function(err){
//         if(err)
//         console.log("error in uploading file" +err);
//         else
//         {
//           var imgdata=new imageUser();
//          imgdata.title=req.body.title;
//           imgdata.photo=req.file.path;
//            console.log(req.file.path);

//             imgdata.save((err,docs)=>{
//                 if(err)
//                 {
//                     console.log(err);
//                 }
//                 else{
//                     res.send(docs);
//                 }
//             });
          
//         console.log("file uploaded succesfully");
//         }
//     })
// }
// }
