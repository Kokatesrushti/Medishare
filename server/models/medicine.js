const mongoose=require('mongoose');

const medicineSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    mf_date:{
        type:String,
        required:true
    },
    exp_date:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    illness:{
        type:String,
        required:true,
        trim:true
    },
    updatedAt:Date,
},{timestamps:true});

module.exports=mongoose.model('Medicine',medicineSchema);

