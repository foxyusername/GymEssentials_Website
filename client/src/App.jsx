import {React,lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
const Register = lazy(()=> import('../components/registration/Register.jsx'));
const Home = lazy(()=> import('../components/home/Home.jsx'));

function App() {
  return <BrowserRouter>
    
 <Routes>
  <Route path="/login" element={<Register />} />
  <Route path="/signup" element={<Register />} />
  <Route path="/home" element={<Home />}/>
 </Routes>

  </BrowserRouter>
}

export default App;
