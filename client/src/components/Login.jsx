import React from 'react'
import {NavLink} from "react-router-dom" 
import {MdPassword, MdEmail } from "react-icons/md";
const Login = () => {
  return (

    <div>
     
     <section className="signup d-flex justify-content-center" >

        <div className="row mt-3"> 
             <div className="container mt-5"> 
          <div class="form-outline d-none d-sm-block ">
          <figure>
          <iframe src="https://embed.lottiefiles.com/animation/71361"  frameBorder="0" height="200vhvh" width="200vw"style={{pointerEvents: "none",Decoration:"none"}} title="Animation"></iframe>
          </figure>
          <NavLink to="/signup" class=" mx-3 px-3 align-center text-center" >I am already registered</NavLink>
          </div>
          <form classname=" card" id="register-form">
            <div className="form-title " style={{ fontSize: "29px" }}>
              <b> Sign up</b>
            </div>
          
           <div class="form-outline ">
              <input placeholder="Email" name="email" type="email" id="email" class="form-control  px-4"  />
              <label class="form-label" for="form6Example5">
              <MdEmail/>  Email
              </label>
            </div>
            <div class="form-outline ">
              <input placeholder="password" name="password" type="password" id="password" class="form-control m-2 px-4"  />
              <label class="form-label" for="form6Example4">
              <MdPassword/>  password
              </label>
            </div>
            <div className = " form-group form-button " >
<input type= "submit" name="signin" id="signin" className = "btn-primary form-submit" value="log in"/>
</div>
          </form>

        </div>
      </div>
    </section>

    </div>

  )
}

export default Login