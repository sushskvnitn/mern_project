import React from "react";
import { FaUserAlt } from "react-icons/fa";
import {MdPassword, MdEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";
import {NavLink} from "react-router-dom" 
const Signup = () => {
  return (
    <section className="signup d-flex justify-content-center" >
      <div className="container mt-5">
        <div className="row mt-3">
          <form classname="register-form" id="register-form">
            <div className="form-title " style={{ fontSize: "29px" }}>
              <b> Sign up</b>
            </div>
            <div class="row ">
              <div class="col">
                <div class="form-outline">
                  <input placeholder="Name" name="name" type="text" id="name" class="form-control" />
                  <label class="form-label" for="form6Example1">
                   <FaUserAlt/>  name
                  </label>
                </div>
              </div>
   
            </div>
           <div class="form-outline ">
              <input placeholder="Name" name="email" type="email" id="email" class="form-control" />
              <label class="form-label" for="form6Example5">
              <MdEmail/>  Email
              </label>
            </div>
            
              <div class="form-outline ">
              <input placeholder="phone" name="phone" type="number" id="phone" class="form-control" />
              <label class="form-label" for="form6Example6">
              <BsFillPhoneVibrateFill/>  Phone
              </label>
            </div>
            <div class="form-outline ">
              <input placeholder="work" name="work" type="text" id="work" class="form-control" />
              <label class="form-label" for="form6Example3">
              <FcWorkflow/>  Work
              </label>
            </div>

            <div class="form-outline ">
              <input placeholder="password" name="password" type="password" id="password" class="form-control" />
              <label class="form-label" for="form6Example4">
              <MdPassword/>  password
              </label>
            </div>
            <div class="form-outline ">
              <input placeholder="cpassword" name="cpassword" type="password" id="cpassword" class="form-control" />
              <label class="form-label" for="form6Example4">
              <MdPassword/>  cpassword
              </label>
            </div>

            <button type="submit" class="btn btn-primary btn-block ">
              Submit
            </button>
          </form>
          <div class="form-outline d-none d-sm-block ">
          <figure>
          <iframe src="https://embed.lottiefiles.com/animation/78126"  frameBorder="0" height="500vh" width="500vw"style={{pointerEvents: "none",Decoration:"none"}} title="Animation"></iframe>
          </figure>
          <NavLink to="/login" class="signup_link" >I am already registered</NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
