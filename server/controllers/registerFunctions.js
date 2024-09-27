import { create } from "domain";
import { checkUserExistantion,insertUserIntoTable,checkCorrectCredentials } from "../services/registerServices.js";
import { createJwt, removeToken } from "./jwtToken.js";

async function registerFunction(req,res){ 

let username = req.body.username;
let email = req.body.email;
let password = req.body.password;

let queryResult = await checkUserExistantion(username);

if(queryResult.length !== 0){
  res.status(409).json({message:'same username already exists',status:0});
}else{
let insertInfo =await insertUserIntoTable(username,email,password);

let userId = insertInfo.insertId;

let token = createJwt(userId);

res.cookie('jwt',token,{
    httpOnly: true,
    sameSite: 'none'
})

res.status(200).json({message:"authenticated succesfully",status:1,})

}

}

async function loginFunction(req,res){

let username = req.body.username;
let password = req.body.password;

let result = await checkCorrectCredentials(username,password);

if(result.length === 0){
  res.status(404).json({message:"user not found",status:0});
}else{
  console.log(result[0].id);
  let token = createJwt(result[0].id);

  res.cookie('jwt',token,{
    httpOnly: true,
    sameSite: 'strict'
})

  res.status(200).json({message:"logged in succesfully",status:1});
}

}

export {registerFunction,loginFunction};