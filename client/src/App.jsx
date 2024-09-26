import {React,lazy,Suspense} from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

const Register = lazy(()=> import('../components/registration/Register.jsx'));

function App() {
  return <BrowserRouter>
    
 <Routes>
  <Route path="/login" element={<Register />} />
  <Route path="/signup" element={<Register />} />
 </Routes>

  </BrowserRouter>
}

export default App;
