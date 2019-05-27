const mongoose=require('mongoose');
//const bcrypt=require('bcrypt');
// require('../config/adminjwtHelper');
// const jwt=require('jsonwebtoken');

var admin=mongoose.Schema({
    role:{
        type:String,
        value:'role'
    },
    name:{
        type:String,
        required:"First Name Should be filled",
        match:[/^[A-Za-z]+$/,"Please Enter only Alphabets"],
    },
    email:{
        type:String,
        required:"Email Should be filled",
        match:[	
            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,"Please Enter Email Format"]

    },
    password:{
        type:String,
        required:"Passsword Should be filled",
    },
    //saltString:String
});
// admin.pre('save',function(next){
//     bcrypt.genSalt(5,(err,Salt)=>
//     {
//         bcrypt.hash(this.password,Salt,(err,hash)=>{
//             this.password=hash;
//             this.saltString=Salt;
//         next();
//         });
//     });
// });
admin.methods.verifypassword=function(password){
    if(password==this.password)
    {
        return true;
    }
    else
    {
        return false;
    }
}
// admin.methods.generateJwt=function(){
//     return jwt.sign({
//         _id:this._id
//     }, "abc123",
//     {
//         expiresIn:'3600m'
//     })
// }
mongoose.model("Admin",admin,"Admin");