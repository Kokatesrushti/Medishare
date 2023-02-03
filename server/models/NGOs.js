const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const NGOsSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
        trim:true
    },
    location:{
        type:String,
        required:true,
        trim:true
    },
    email:{
        type:String,
        unique:true,
        required:true,
        trim:true,
        lowercase:true
    },
    contact:{
        type:Number,
        required:true
    },
},{timestamps:true});



module.exports=mongoose.model('NGOS',NGOsSchema);

