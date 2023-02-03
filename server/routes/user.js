const express=require('express');
const router=express.Router();
const {signup,login,uploadMedicine,viewMedicine,getNGObyLocation,addNGO,getngo}=require('../controllers/user.js');
// const { validateSignupRequest,validateLoginRequest, isRequestValidated } = require('../validator/auth');


router.post('/login',login);

router.post('/signup',signup);

router.post('/uploadmed',uploadMedicine);

// router.post('/addngo',addNGO);

router.get('/viewmed',viewMedicine);

router.get('/getngobylocation',getNGObyLocation);

router.get('/getngo',getngo);

module.exports=router;