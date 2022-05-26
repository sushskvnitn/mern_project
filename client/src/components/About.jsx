/* eslint-disable jsx-a11y/anchor-has-content */
import React,{useEffect,useState} from "react";
import {useNavigate} from "react-router-dom";
const About = () => {
  const navigate = useNavigate();
  const [UserData, setUserData] = useState({});
  const callAboutpage = async() => {
   try {
     const res = await fetch('/about',{
       method:"GET",
        headers:{
          Accept:"application/json",
          "Content-Type":"application/json"
        },
        credentials:"include"
     });
      const data = await res.json();
      console.log(data);
      setUserData(data);
     
      if(!res.status===200){
        const err = new Error(res.error);
        throw err;
      }
   } catch (error) {
     console.log(error);
     navigate('/login');
   } 
  }
  useEffect(() => {
   callAboutpage();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
    
    <div className="container my-5 py-5" >
    <form method="GET">
      <div className="card">
        <div className="row g-0">
          <div className="col-5 col-sm-4">
            <img
            src={UserData.name==="ram"?"https://cdn.shopify.com/s/files/1/0045/5104/9304/files/Styling-American-Crew-Phillipe-RGMN_58cb1549-9653-4a1e-bbdc-4fee6c4bec4c.jpg?v=1648568598":"https://www.w3schools.com/howto/img_avatar.png"}
              className="img-fluid w-100"
              alt="card"
            />
          </div>
          <div className="col-7 col-sm-7">
            <div className="card-body">
              <h5 className="card-title">{UserData.name}</h5>
              <p className="card-text text-monospace">{UserData.work}</p>
              <p className="card-text">
                RATING: <span className="text">1/10</span>
              </p>
            </div>
            <div>
              <ul className="nav nav-tabs" role="tablist">
                <li className="nav-item">
                  <a
                    className="nav-link active"
                    data-toggle="tab"
                    id="home-tab"
                    href="#home"
                    role="tab"
                    aria-controls="home"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a
                    className="nav-link "
                    data-toggle="tab"
                    id="profile-tab"
                    href="#profile"
                    role="tab"
                    aria-controls="profile"
                  >
                    timeline
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-md-1">
            <input
              type="button"
              className="btn btn-primary btn-sm "
              name="true"
              value="Edit"
            />
          </div>
        </div>

        <div className="row">
          <div className=" col-md-4">
            <p>WORK LINK</p>
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              toutube
            </a>
            <br />
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              insta
            </a>
            <br />
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              telegram
            </a>
            <br />
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              youtube
            </a>
            <br />
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              figma
            </a>
            <br />
            <a href="https://youtu.be/kHEhhV3EyPU" target="_thapa">
              vscode
            </a>
            <br />
          </div>

          <div className="col-md-8 pl-5">
            <div className="tab-content profile-tab" id="mytabcontent">
              <div
                className="tab-pane fade show active"
                id="home"
                role="tabpanel"
                aria-labelledby="home-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>user id</label>
                  </div>
                  <div className="col-md-6">
                    <p>{UserData._id}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>name:</label>
                  </div>
                  <div className="col-md-6">
                    <p> {UserData.name}</p>
                  </div>
                </div>   
                 <div className="row">
                  <div className="col-md-6">
                    <label>branch:</label>
                  </div>
                  <div className="col-md-6">
                    <p> cse</p>
                  </div>
                </div>  
                  <div className="row">
                  <div className="col-md-6">
                    <label>phone:</label>
                  </div>
                  <div className="col-md-6">
                    <p>{UserData.phone}</p>
                  </div>
                </div>
              </div>
              <div
                className="tab-pane fade show  "
                id="profile"
                role="tabpanel"
                aria-labelledby="profile-tab"
              >
                <div className="row">
                  <div className="col-md-6">
                    <label>experience</label>
                  </div>
                  <div className="col-md-6">
                    <p>{UserData.work}</p>
                  </div>
                </div>
                <div className="row">
                  <div className="col-md-6">
                    <label>college </label>
                  </div>
                  <div className="col-md-6">
                    <p>vnit</p>
                  </div>
                </div>   
                 <div className="row">
                  <div className="col-md-6">
                    <label>location</label>
                  </div>
                  <div className="col-md-6">
                    <p> nagpur</p>
                  </div>
                </div>  
                  <div className="row">
                  <div className="col-md-6">
                    <label>phone:</label>
                  </div>
                  <div className="col-md-6">
                    <p>{UserData.phone}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
      </form>
    </div>
    </>
  );
};

export default About;
