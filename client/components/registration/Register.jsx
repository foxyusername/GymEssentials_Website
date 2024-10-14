import "./register.css";
import { useState } from "react";
import {useLocation,useNavigate} from 'react-router-dom';
import axios from 'axios';
import { useRef } from "react";

import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

function Register(){


let formRef = useRef();

const [passwordVisible,setPasswordVisible] = useState(false);
const [error,setError] = useState('');

let location = useLocation();
let history = useNavigate();

const currentPath = location.pathname;

const schema = yup.object().shape({
  username: yup
  .string()
  .required('Username is required')
  .max(16)
  .matches(/^\S*$/, 'Username cannot contain spaces'), // No spaces allowed

email: currentPath ==="/signup" && yup
  .string()
  .email('Invalid email')
  .required('Email is required')
  .min(4)
  .matches(/^\S*$/, 'Email cannot contain spaces'), // No spaces allowed

password: yup
  .string()
  .min(8, 'Password must be at least 8 characters')
  .required('Password is required')
  .matches(/^\S*$/, 'Password cannot contain spaces'), // No spaces allowed
});

const { register, handleSubmit, formState: { errors }, reset } = useForm({
    resolver: yupResolver(schema),
});

function togglePasswordVisibility(){
  if(passwordVisible) setPasswordVisible(false);
  if(!passwordVisible) setPasswordVisible(true);
}

function onFormSubmit(data){


if(currentPath === "/login"){

  axios.post(import.meta.env.VITE_API_URL + "/authenticate/login",{
    username: data.username,
    password: data.password
  },{withCredentials:true})
  .then(res => history('/home'))
  .catch(err => {
    setError(err.response.data.message)
    reset();
  })
  }

if(currentPath === "/signup"){
  axios.post(import.meta.env.VITE_API_URL + "/authenticate/signup",{
    username: data.username,
    email: data.email,
    password: data.password
  },{withCredentials:true})
  .then(res => history('/home'))
  .catch(err => {
    setError(err.response?.data?.message);
    reset();
  })}

}

function submitBtn(){
  formRef.current.requestSubmit();
}

return <div className="registerMainDiv">
<div className="registerCenterDiv" style={{}}>

{error.length > 0 && <div className="errorDiv" onClick={()=>{setError('')}}> 


<div>

<button id="closeBtn"><i class="fa-solid fa-x"></i></button>

{currentPath === '/login' ? <i class="fa-solid fa-ghost"></i> : <i class="fa-solid fa-user"></i>}
<p id="errorMessage">{error}</p>

<p>If anything is wrong please contact our support team.</p>
</div>

</div>
}

<header className="registerHeader">
  <img src="https://cdn.icon-icons.com/icons2/644/PNG/512/red_gym_icon-icons.com_59513.png" alt="website logo" />
  <h1>WELCOME TO GYMESSENTIALS</h1>

  <p>REGISTER AND START SHOPPING</p>
</header>
  <form ref={formRef} onSubmit={handleSubmit(onFormSubmit)}>
    <h2>{errors.username?.message}</h2>
    <span><i class="fa-solid fa-user"></i> <input type="text" placeholder="Username..." {...register('username')}/></span>
    <h2>{errors.email?.message}</h2>
   {currentPath === "/signup" && <span><i class="fa-solid fa-envelope"></i> <input type="text" placeholder="Email..." {...register('email')}/></span>}
    <h2>{errors.password?.message}</h2>
    <span>
    <i class="fa-solid fa-lock"></i>
    <input type={passwordVisible ? "text" : "password"} placeholder="Password..." {...register('password')}/>
   {passwordVisible ? <i onClick={togglePasswordVisibility} id="eyeIcon" class="fa-solid fa-eye-slash"></i> : <i onClick={togglePasswordVisibility} id="eyeIcon" class="fa-solid fa-eye"></i>}
    </span>
  </form>

  {currentPath === "/signup" ? <p id="redirectTxt">Already have an account? <a href="/login">Login here</a></p>: <p id="redirectT">Don't have an account? <a href="/signup">Signup here</a></p>}

  <button onClick={submitBtn}>{currentPath === "/signup" ? 'SIGNUP' : 'LOGIN'}</button> 
</div>
</div>

}


export default Register;