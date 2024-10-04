import "./register.css";
import { useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useRef } from "react";

function Register(){


let formRef = useRef();

const [password,setPassword] = useState('');
const [email,setEmail] = useState('');
const [username,setUsername] = useState('');
const [passwordVisible,setPasswordVisible] = useState(false);
const [error,setError] = useState('');

let location = useLocation();
let history = useNavigate();

const currentPath = location.pathname;

function passwordValue(e){
 setPassword(e.target.value);
}

function emailValue(e){
 setEmail(e.target.value);
}

function usernameValue(e){
 setUsername(e.target.value);
}

function togglePasswordVisibility(){
  if(passwordVisible) setPasswordVisible(false);
  if(!passwordVisible) setPasswordVisible(true);
}

function onFormSubmit(e){

e.preventDefault();

if(currentPath === "/login"){

  axios.post(import.meta.env.VITE_API_URL + "/authenticate/login",{
    username: username,
    password: password
  },{withCredentials:true})
  .then(res => history('/home'))
  .catch(err => setError(err.response.data.message))

}

if(currentPath === "/signup"){
  
  axios.post(import.meta.env.VITE_API_URL + "/authenticate/signup",{
    username: username,
    email: email,
    password: password
  },{withCredentials:true})
  .then(res => history('/home'))
  .catch(err => setError(err.response?.data?.message));

}

}

function submitBtn(){
  formRef.current.requestSubmit();
}

return <div className="registerMainDiv">
<div className="registerCenterDiv" style={{}}>

{error.length > 0 && <div className="errorDiv" onClick={()=>{setError('')}}> 

<div>
{currentPath === '/login' ? <i class="fa-solid fa-ghost"></i> : <i class="fa-solid fa-user"></i>}
<p id="errorMessage">{error}</p>
</div>

</div>
}

<header>
  <img src="https://cdn.icon-icons.com/icons2/644/PNG/512/red_gym_icon-icons.com_59513.png" alt="website logo" />
  <h1>WELCOME TO GYMESSENTIALS</h1>

  <p>REGISTER AND START SHOPPING</p>
</header>

  <form ref={formRef} onSubmit={onFormSubmit}>
    <span><i class="fa-solid fa-user"></i> <input onChange={usernameValue} type="text" placeholder="Username" required/></span>
   {currentPath === "/signup" && <span><i class="fa-solid fa-envelope"></i> <input onChange={emailValue} type="email" placeholder="Email" required/></span>}
    <span>
    <i class="fa-solid fa-lock"></i>
    <input onChange={passwordValue} type={passwordVisible ? "text" : "password"} placeholder="Password" required minLength={8}/>
   {passwordVisible ? <i onClick={togglePasswordVisibility} id="eyeIcon" class="fa-solid fa-eye-slash"></i> : <i onClick={togglePasswordVisibility} id="eyeIcon" class="fa-solid fa-eye"></i>}
    </span>
  </form>

  {currentPath === "/signup" ? <p id="redirectTxt">Already have an account? <a href="/login">Login here</a></p>: <p id="redirectT">Don't have an account? <a href="/signup">Signup here</a></p>}

  <button onClick={submitBtn}>{currentPath === "/signup" ? 'SIGNUP' : 'LOGIN'}</button> 
</div>
</div>
}

export default Register;