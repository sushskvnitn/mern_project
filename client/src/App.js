import React from "react";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Errorpage from "./components/errorpage";
import  "./App.css"
import {
  Routes,
  Route,
} from "react-router-dom";
function App() {
  return (
    <div >
     <Navbar />
     
        <Routes>
        <Route  exact  path='/' element={<Home/>}  />
        <Route  path='/about' element={<About/>}  />
        <Route  path='/contact' element={<Contact/>}  />
        <Route  path='/signup' element={<Signup/>}  />
        <Route  path='/login' element={<Login/>}  />
        <Route path="*" element={<Errorpage/>}  />
    </Routes>
    

    </div>
  );
}

export default App;
