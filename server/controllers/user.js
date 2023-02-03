const User=require('../models/user');
const Medicine=require('../models/medicine');
const Ngo=require('../models/NGOs')
const jwt=require('jsonwebtoken');
const env=require('dotenv')


env.config();

exports.signup=(req, res)=>{
 
    User.findOne({email:req.body.email})
        .exec((error,user)=>{
            if(error){
                console.log(error)
            }
            if(user) return res.status(400).json({
                message: 'User Already Registered'
            })

            const _user = new User({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                password: req.body.password,
                location: req.body.location
            })

            _user.save((error,data)=>{
                if(error){
                    console.log(error)
                    return res.status(400).json({
                        error,
                        message:'Something Went Wrong'
                    })
                }

                if(data){
                    return res.status(200).json({
                        message:'User Created Successfully'
                    })
                }
            })
        })
}

exports.login=(req,res)=>{
    User.findOne({email:req.body.email})
    .exec((error,user)=>{
        if(error) return res.status(400).json({
            message:"Error"
        })
        if(user){
            if(user.authenticate(req.body.password)){
                const token=jwt.sign({_id:user._id,role:user.role},"test",{expiresIn:'1h'})
                const {_id,firstName,lastName,fullName,email,role} =user;
                res.status(200).json({
                    token,
                    user:{
                        _id,firstName,lastName,fullName,email,role
                    },
                    status:200
                })
            }
            else{
                res.status(400).json({
                    message:"Something went wrong"
                })
            }
        }
    })
}

exports.uploadMedicine=(req,res)=>{

    const medicine=new Medicine({
        name:req.body.name,
        mf_date:req.body.mf_date,
        exp_date:req.body.exp_date,
        price:req.body.price,
        illness:req.body.illness
    })

    medicine.save((error,info)=>{
        if(error){
            console.log(error);
            return res.status(400).json({
                message:'Try again'
            })
        }

        if(info){
            return res.status(200).json({
                message:'Medicine uploaded sucessfully'
            })
        }
    })
}

exports.viewMedicine = (req,res)=>{
Medicine.find({})
.exec((error,data)=>{
    if(error){
        return res.status(400).json({
            error:error.message
    })
}

    if(data){
        return res.status(200).json({
            data
    })
}
})
}

exports.getNGObyLocation=(req,res)=>{
    
    Ngo.findOne({location: req.body.location})
    .exec((error,list)=>{
        console.log(list)
        if(error){
            console.log(error);
            return res.status(400).json({
                message:'Error!! Try again'
            })
        }

        if(list){
            return res.status(200).json({
                NGO_List:list
            })
        }
    })

}


exports.getngo=(req,res)=>{
    
    Ngo.find({})
    .exec((error,list)=>{
        console.log(list)
        if(error){
            console.log(error);
            return res.status(400).json({
                message:'Error!! Try again'
            })
        }

        if(list){
            return res.status(200).json({
                NGO_List:list
            })
        }
    })

}





// exports.addNGO=(req,res)=>{

//     const ngo=new Ngo({
//         name:req.body.name,
//         location:req.body.location,
//         email:req.body.email,
//         contact:req.body.contact
//     })

//     ngo.save((error,info)=>{
//         if(error){
//             console.log(error);
//             return res.status(400).json({
//                 message:'Try again'
//             })
//         }

//         if(info){
//             return res.status(200).json({
//                 message:'NGO updated sucessfully'
//             })
//         }
//     })
// }

// exports.buyMedicine=(req,res)=>{

// }