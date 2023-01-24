const express = require("express");
const router = express.Router();
const Model = require("../models/userModel");

router.post('/register',(req,res)=>{
  console.log(req.body);
  req.body.passwordCopy = req.body.password;
  new userModel(req.body).save()
  .then((result) => {
      console.log(result);
      res.json(result);
  }).catch((err) => {
      console.log(err);
      res.json(err);
  });
})

router.post('/login',(req,res)=>{
  console.log(req.body);
  userModel.findOne({email:req.body.email,passwordCopy:req.body.password})
  .then((result) => {
      console.log(result);
      res.status(200).json(result);
  }).catch((err) => {
      console.log(err);
      res.json(err);
  });
})

module.exports = router;