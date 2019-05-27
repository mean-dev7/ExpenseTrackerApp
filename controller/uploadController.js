const mongoose=require('mongoose');
//require('../model/userModel');
//require('../model/imagemodel');
require ('../model/imgModel')

//var User=mongoose.model('user');
var imageUser=mongoose.model('imagesdata');
//const passport = require('passport');
const path=require('path');

//const _ = require('lodash');
const multer=require('multer');
const fs=require('fs');


// module.exports.register=(req,res)=>{
//     var newUser=new User;
//     newUser.name=req.body.name;
//     newUser.email=req.body.email;
//     newUser.password=req.body.password;

//     newUser.save((err,doc)=>{
//         if(err)
//         {
//         res.send(err);
//         console.log(err);
//         }
//         else
//         {
//             res.send(doc);
//             console.log("Register Successfully");
//         }
//     })
// };


// module.exports.viewall=(req,res)=>{
//     User.find((err,doc)=>{
//         if(err)
//         {
//         res.send(err);
//         console.log(err);
//         }
//         else
//         res.send(doc);
//     });

    
// };


// module.exports.authenticate=(req,res,next)=>{
//     passport.authenticate('local',(err,user,info)=>{
//         if(err) return res.status(404).json(err);
//         if(user) return res.status(200).json({token:user.generateJwt()});
//         else return res.status(404).json(info);
//     })(req,res);
// }



// module.exports.userProfile = (req, res, next) =>{
//     User.findOne({ _id: req._id },
//         (err, user) => {
//             if (!user)
//                 return res.status(404).json({ status: false, message: 'User record not found.' });
//             else
//                 return res.status(200).json({ status: true, user : _.pick(user,['email']) });
//         }
//     );
// }


// module.exports.updatedata=(req,res)=>{
//     var user={
//         name:req.body.name,
//         email:req.body.email,
//         password:req.body.password
//     }
//     User.findByIdAndUpdate(req.params.id,user,{upsert:true},(err,doc)=>{
//         if(err)
//         {
//         res.send(err);
//         console.log(err);
//         }
//         else{
//             res.send(doc);
//             console.log(doc);
//             console.log("data updatated successfully");
//         }
//     })
// }
// //file upload
// // const storage=multer.diskStorage({
// //     destination:function(req,file,cb)
// //     {
// //         cb(null,'./uploads');
// //     },
// //     filename:function(req,file,cb)
// //     {
// //         cb(null,file.originalname);
// //         // var fname=file.originalname;
// //     }
// // })

const storage=multer.diskStorage({
    destination:function(req,file,cb)
    {
        cb(null,'./uploads');
    },
    filename:function(req,file,cb){
        cb(null,file.originalname);
    }
    
})
var upload=multer({storage:storage}).single('photo');

module.exports.uploadfile=(req,res)=>{
    upload(req,res,function(err){
        if(err)
        console.log("error in uploading file" +err);
        else
        {
          var imgdata=new imageUser();
         // imgdata.title=req.body.title;
          imgdata.photo=req.file.path;
          console.log(req.file.path);

            imgdata.save((err,docs)=>{
                if(err)
                {
                    console.log(err);
                }
                else{
                    res.send(docs);
                }
            });
          
        console.log("file uploaded succesfully");
        }
    })
}
