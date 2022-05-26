import React,{useEffect,useState} from "react";

const Contact = () => {
  const [UserData, setUserData] = useState({name: "",email: "",phone: "",message: ""});
  const usercontact = async() => {
   try {
     const res = await fetch('/getdata',{
       method:"GET",
        headers:{
          "Content-Type":"application/json"
        },
     });
      const data = await res.json();
      console.log(data);
      setUserData({...UserData,name:data.name,email:data.email,phone:data.phone,message:data.message});
     
      if(!res.status===200){
        const err = new Error(res.error);
        throw err;
      }
   } catch (error) {
     console.log(error);
   } 
  }
  useEffect(() => {
    usercontact();
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  
 const handleInputs = (e) => {
   const name = e.target.name;
    const value = e.target.value;
    setUserData({...UserData,[name]:value});
  }
//send data to server
  const handleSubmit = async(e) => {
    e.preventDefault();
    const {name,email,phone,message} = UserData;

    const res= await fetch('/contact',{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify({name,email,phone,message})
    });
    const data = await res.json();
    if(!data){
      console.log("message not sent");
    }else{
      alert("message sent");
      setUserData({...UserData,message:""});
    }

  }
  return (
    <>
    <div style={{"backgroundColor":"#d7d7d8"}} className="d-flex text-monospace flex-wrap justify-content-center">
        <div className="p-4 m-2  bg-primary bg-gradient text-white">
        <img src="https://img.icons8.com/ios/50/000000/apple-phone.png" alt=""/>
          <div className="title mb-4 text-bold">
            Phone 
          </div>
          <span> +91 1111 543 123</span>
        </div>
        <div className="p-4  m-2  bg-primary bg-gradient text-white">
        <img src="https://img.icons8.com/ios/50/000000/email-open.png" alt=""/>
          <div className="title mb-4 text-bold">
            email 
          </div>
          <span> abc@gmail.com <pre>                 </pre>      </span>
        </div>
        <div className="p-4 m-2  bg-primary bg-gradient text-white">
        <img src="https://img.icons8.com/ios/50/000000/linkedin-circled--v1.png" alt="" />
          <div className="title mb-4 text-bold">
            linkedin  
          </div>
          <span>abc <pre>                  </pre></span>
        </div>
      </div>
      <div className="px-5 py-4 mx-5 d-flex justify-content-center align-content-centers">
        <form className=" w-50" id="contact_form" method="POST">
        <h4 className="text-monospace"> <b> Get In touch </b></h4>
          <div className="row mb-4">
            <div className="col">
              <div className="form-outline">
                <input type="text"    name="name"    onChange={handleInputs}   value={UserData.name} placeholder="enter your name" id="form3Example1" className="form-control" />
          
              </div>
            </div>
            <div className="col">
              <div className="form-outline">
                <input type="Number"    name="phone"    onChange={handleInputs}   value={UserData.phone} placeholder="enter your Number" id="form3Example2" className="form-control" />
           
              </div>
            </div>
          </div>

          <div className="form-outline mb-4">
           
            <input type="email "    name="email"    onChange={handleInputs}   value={UserData.email} placeholder="enter your Email" id="form3Example3" className="form-control" />

          </div>
          <div className="form-outline mb-4">
            <textarea type="text"    name="message"    onChange={handleInputs}   value={UserData.message} placeholder="enter your Message" id="form3Example4" className="form-control" />
            <label className="form-label" htmlFor="form3Example4">
              message
            </label>
          </div>
          <div className="form-check d-flex justify-content-center mb-4"></div>
          <button type="submit" onClick={handleSubmit} className="btn btn-primary btn-sm btn-block mb-4">
            send message
          </button>
        </form>
      </div>
      
    </>
  );
};

export default Contact;
