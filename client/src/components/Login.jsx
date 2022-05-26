import React,{useState} from 'react'
import {NavLink,useNavigate} from "react-router-dom" 
import {MdPassword, MdEmail } from "react-icons/md";
const Login = () => {
  const navigate = useNavigate();
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const loginuser = async(e) => {
        e.preventDefault();
        console.log(email,password);
        const res= await fetch('/signin',{
            method:'post',
            headers:{
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                email,
                password
            })

        });
        const data = await res.json();
        if(res.status===400||!data){
            alert("invalid credentials");
        }
        else{
          alert("successfully logged in");
            navigate('/');
        }

    }
  return (

    <div>
     
     <section className="signup d-flex justify-content-center" >

        <div className="row mt-3"> 
             <div className="container mt-5"> 
          <div className="form-outline d-none d-sm-block ">
          <figure>
          <iframe src="https://embed.lottiefiles.com/animation/71361"  frameBorder="0" height="200vhvh" width="200vw"style={{pointerEvents: "none",Decoration:"none"}} title="Animation"></iframe>
          </figure>

          </div>
          <form className=" " id="register-form" method="POST" >
            <div className="form-title " style={{ fontSize: "29px" }}>
              <b> Sign up</b>
            </div>
          
           <div className="form-outline ">
              <input placeholder="Email" name="email" value={email} onChange={(e)=>setEmail(e.target.value)}  type="email" id="email" className="form-control  px-4"  />
              <label className="form-label" htmlFor="form6Example5">
              <MdEmail/>  Email
              </label>
            </div>
            <div className="form-outline ">
              <input placeholder="password" value={password}  onChange={(e)=>setPassword(e.target.value)}  name="password" type="password" id="password" className="form-control  px-4"  />
              <label className="form-label" htmlFor="form6Example4">
              <MdPassword/>  password
              </label>
            </div>
          
            <div className = "btn form-group form-button " >
<input type= "submit" name="signin" id="signin" onClick={loginuser} className = "btn-primary form-submit" value="log in"/>
</div>  <NavLink to="/signup" className=" mx-3 px-3 align-center text-center" >new user?</NavLink>
          </form>

        </div>
      </div>
    </section>

    </div>

  )
}

export default Login