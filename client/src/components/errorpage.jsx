import React from 'react'
import {NavLink} from "react-router-dom"
const Errorpage = () => {
  return (
    <>
      <div id="not found" className="">
      <img
        className="img-fluid"
        src="https://media.istockphoto.com/photos/word-error-with-computer-mouse-on-chalkboard-background-3d-rendering-picture-id1204713198?b=1&k=20&m=1204713198&s=170667a&w=0&h=_LzozIOt4SQc-8jei93XFsPMOgggA3u5193CuQngjlo="
        type="image"
        alt="..."
        style={{
          position: "absolute",
          width: "100%",
          height: "90vh",
          objectFit: "cover",
          zIndex: "-1"
        }}
      />
            <div className="not found"> 
                  <div className="not found-404  d-flex flex-column text-center">
                  <br /><br /><br />
                 
                        <h1  className="text-center" style={{"fontSize":"200px"}} >404</h1>
                        <h2 className="display-5">Page not found</h2>
                        <NavLink to="/" className="btn btn-primary">back to the home page</NavLink>
                        
                  </div>
            </div>

      </div>


    </>
  )
}

export default Errorpage