const mongoose=require('mongoose');
const bcrypt=require('bcrypt');

const adminSchema=new mongoose.Schema({
    firstName:{
        type:String,
        required:true,
        trim:true
    },
    lastName:{
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
    location:{
        type:String,
        required:true
    },
    hash_pass:{
        type:String,
        required:true
    },
    role:{
        type:String,
        enum:['user','admin'],
        default:'user'
    }
},{timestamps:true});

userSchema.virtual('password').set(function(password){
    this.hash_pass=bcrypt.hashSync(password,10)
});

userSchema.virtual('fullName').get(function(){
    return `${this.firstName} ${this.lastName}`;
})

userSchema.methods={
    authenticate: function(password){
        return bcrypt.compareSync(password,this.hash_pass)
    }
}

module.exports=mongoose.model('Admin',adminSchema);