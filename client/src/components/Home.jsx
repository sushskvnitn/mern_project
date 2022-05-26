import React,{useState,useEffect} from 'react'

const Home = () => {
  const [UserName, setUserName] = useState('');
  const [show, setshow] = useState(false);
  const userHome = async() => {
   try {
     const res = await fetch('/getdata',{
       method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
     });
      const data = await res.json();
      console.log(data);
      setUserName(data.name);
      setshow(true);
   } catch (error) {
     console.log(error);
   } 
  }
  useEffect(() => {
    userHome();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);



  return (
        <>
              <img
        className="img-fluid"
        src="https://media.istockphoto.com/photos/cyber-security-web-development-and-work-in-it-concept-picture-id1289411982?b=1&k=20&m=1289411982&s=170667a&w=0&h=0R3OXR4L6LOGphYA3sul4bWQwpGj_DSl05ENiP2kRZg="
        type="image"
        alt="..."
        style={{
          position: "absolute",
          width: "100%",
          height: "90vh",
          objectFit: "cover",
          zIndex: "-1",
          opacity: "80%",
        }}
      />
    <h3 className="text-center my-5 pt-5" >WELCOME</h3>
    <h1 className="text-center   text-monospace text-white">hello_  {UserName+'🙈🙉🙊'} </h1>
    <h3 className="text-center"> {show?'Glad, to see you back 😁':'we are Mern developer'} </h3>
  </>)
}

export default Home