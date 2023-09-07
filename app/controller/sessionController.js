const usersModel = require('../model/usersModel')
const jwt = require('jsonwebtoken')
const {SEC_KEY} = process.env

module.exports.signup = async function(req,res)
{
    let user = new usersModel(req.body)
    let data = await user.save()
    res.json({data:data,msg:'Signup Done',rcode:200})
}

module.exports.login = async function(req,res)
{
    let email = req.body.email
    let password = req.body.password
    let user = await usersModel.findOne({email:email})
    if (user && user.password == password) {
        token = jwt.sign({ "authId":user._id,"authority":"user"},SEC_KEY,{expiresIn:"7d"})
        console.log("token "+token);
        res.json({data:user,msg:"Login done",rcode:200,token:token})
    }else{      
        res.json({data:req.body,msg:"Invalid Credentials",rcode:-9})
    } 
}