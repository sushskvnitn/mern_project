import React, { useState } from "react";
import { FaUserAlt } from "react-icons/fa";
import { MdPassword, MdEmail } from "react-icons/md";
import { BsFillPhoneVibrateFill } from "react-icons/bs";
import { FcWorkflow } from "react-icons/fc";
import { NavLink, useNavigate } from "react-router-dom";
const Signup = () => {
  const navigate = useNavigate();
  const [user, setuser] = useState({
    name: "",
    email: "",
    phone: "",
    work: "",
    password: "",
    cpassword: "",
  });

  let name, value;
  const handleInputs = (e) => {
    name = e.target.name; //here name means the name attribute in
    value = e.target.value;
    setuser({ ...user, [name]: value });
  };

  const postdata = async (e) => {
    //here using fetch api call the api and send the data to the server
    e.preventDefault();
    const { name, email, phone, work, password, cpassword } = user;

    const response = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        phone,
        work,
        password,
        cpassword,
      }),
    });
    const data = await response.json();
    if (data.status === 422 || !data) {
      alert("user already exists");
      console.log(data);
    } else {
      alert("user successfully registered");
      console.log(data);
    }
    navigate("/login");
  };
  return (
    <section className="signup align-center d-flex justify-content-center flex-direction">
      <div className="container mt-5" >
        <div className="row mt-3">
          <form className="register-form " id="register-form" method="POST">
            <div className="form-title " style={{ fontSize: "29px" }}>
              <b> Sign in</b>
            </div>
            <div className="row ">
              <div className="col">
                <div className="form-outline">
                  <input
                    placeholder="Name"
                    name="name"
                    type="text"
                    id="name"
                    autoComplete="off"
                    value={user.name}
                    onChange={handleInputs}
                    className="form-control  px-4"
                  />
                  <label className="form-label" htmlFor="form6Example1">
                    <FaUserAlt /> name
                  </label>
                </div>
              </div>
            </div>
            <div className="form-outline ">
              <input
                placeholder="Email"
                name="email"
                type="email"
                id="email"
                autoComplete="off"
                value={user.email}
                onChange={handleInputs}
                className="form-control  px-4"
              />
              <label className="form-label" htmlFor="form6Example5">
                <MdEmail /> Email
              </label>
            </div>

            <div className="form-outline ">
              <input
                placeholder="phone"
                name="phone"
                type="number"
                id="phone"
                autoComplete="off"
                value={user.phone}
                onChange={handleInputs}
                className="form-control  px-4"
              />
              <label className="form-label" htmlFor="form6Example6">
                <BsFillPhoneVibrateFill /> Phone
              </label>
            </div>
            <div className="form-outline ">
              <input
                placeholder="work"
                name="work"
                type="text"
                id="work"
                autoComplete="off"
                value={user.work}
                onChange={handleInputs}
                className="form-control  px-4"
              />
              <label className="form-label" htmlFor="form6Example3">
                <FcWorkflow /> Work
              </label>
            </div>

            <div className="form-outline ">
              <input
                placeholder="password"
                name="password"
                type="password"
                id="password"
                autoComplete="off"
                value={user.password}
                onChange={handleInputs}
                className="form-control  px-4"
              />
              <label className="form-label" htmlFor="form6Example4">
                <MdPassword /> password
              </label>
            </div>
            <div className="form-outline ">
              <input
                placeholder="cpassword"
                name="cpassword"
                type="password"
                id="cpassword"
                autoComplete="off"
                value={user.cpassword}
                onChange={handleInputs}
                className="form-control  px-4"
              />
              <label className="form-label" htmlFor="form6Example4">
                <MdPassword /> cpassword
              </label>
            </div>
            <div className=" form-group form-button ">
              <input
                type="submit"
                name="signin"
                id="signin"
                className="btn-primary form-submit"
                value="register"
                onClick={postdata}
              />
            </div>
          </form>
          <div className="form-outline d-none d-sm-block ">
            <figure>
              <iframe
                src="https://embed.lottiefiles.com/animation/78126"
                frameBorder="0"
                height="300vh"
                width="400vw"
                style={{ pointerEvents: "none", Decoration: "none" }}
                title="Animation"
              ></iframe>
            </figure>
            <NavLink
              to="/login"
              className=" mx-3 px-3 align-center text-center"
            >
              I am already registered
            </NavLink>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
