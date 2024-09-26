import jwt from 'jsonwebtoken';

function createJwt(userId){
    
let payload = {
    id: userId
}

let token = jwt.sign(payload,process.env.JWT_SECRET);

return token;

}

function removeToken(req,res){
    res.clearCookie('jwt', {
        httpOnly: true,
        sameSite: 'none'
    })
 
res.status(200).json({message:"logged out succefully",status:1});
}

function validateToken(req,res){
  
//gain access to token
//if token exists verify it and resolve the response
  //if token can't surpass the validation then reject the response
//if token doesn't exist reject the response


let token = req.cookies.jwt;

if(token){
try{
 let decoded = jwt.verify(token,process.env.JWT_SECRET);

 res.status(200).json({message:'token is valid',status:1,userId: decoded.id});

}catch(err){
    res.status(401).json({message:"token is invalid",status:0});
} 


}else{
    res.status(404).json({message:"validation couldn't happen because token wasn't presented",status:0});
}

}

export {createJwt,removeToken,validateToken}