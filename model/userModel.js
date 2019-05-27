const mongoose=require('mongoose');
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken');

var users=mongoose.Schema({
    fname:{
        type:String,
        required:"First Name Should be filled",
        match:[/^[A-Za-z]+$/,"Please Enter only Alphabets"],

    },
    lname:{
        type:String,
        required:"Last Name Should be filled",
        match:[/^[A-Za-z]+$/,"Please Enter only Alphabets"]
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
    
   
    saltString:String
});
users.pre('save',function(next){
    bcrypt.genSalt(5,(err,Salt)=>
    {
        bcrypt.hash(this.password,Salt,(err,hash)=>{
            this.password=hash;
            this.saltString=Salt;
        next();
        });
    });
});
users.methods.verifypassword=function(password){
    return bcrypt.compareSync(password,this.password);
}


// users.methods.generateJwt=function(){
//     return jwt.sign({
//         _id:this._id
//     }, "XYZ123",
//     {
//         expiresIn:'3600m'
//     })
// }

users.methods.generateJwtSign=function()
{
    return jwt.sign({
        _id:this._id
    },"XYZ123",
    {
        expiresIn:'3000m'
    })
}

mongoose.model("User",users);