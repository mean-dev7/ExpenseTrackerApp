const mongoose=require('mongoose');
require('./userModel');

var usersch=mongoose.Schema({

    UserId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User"
    },
    title:{
        type:String
    },
    photo:{
        type:String
    },
    uploaddate:{
        type:Date,"default":Date.now()
    }
});

mongoose.model('imagesdata',usersch);