import { pool } from "../modules/database.js";

function checkUserExistantion(username){
return new Promise((resolve,reject)=>{
    
let query = "SELECT * FROM users WHERE username = ?";

pool.query(query,[username],(err,result)=>{
    if(err) reject(err);

    if(result) resolve(result);
});

})

}


function insertUserIntoTable(username,email,password){

return new Promise((resolve,reject)=>{
    let query = "INSERT INTO users (username,email,passkey) VALUES (?,?,?)";

    pool.query(query,[username,email,password],(err,result)=>{
        if(err) reject(err);

        if(result) resolve(result);
    })
})

}

function checkCorrectCredentials(username,password){
    return new Promise((resolve,reject)=>{
  
  let query = "SELECT * FROM users WHERE username = ? AND passkey = ?";

  pool.query(query,[username,password],(err,result)=>{
    if(err) reject(err);

    if(result) resolve(result);
  
})

    })
}

export {checkUserExistantion,insertUserIntoTable,checkCorrectCredentials}