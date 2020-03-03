const express=require('express');
const router=express.Router();

const login1=require('../controller/login');
const signup1=require('../controller/register');
const index1=require('../controller/index');
router.get('/',index1.index);
router.get('/login',login1.login);
router.get('/signup',signup1.signUp);
router.post('/signup',signup1.posts);
module.exports=router;

