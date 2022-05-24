import React from "react";
const Contact = () => {
  return (
    <>
    <div className="d-flex text-monospace flex-wrap justify-content-center">
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
        <form classname="card w-50" id="contact_form">
        <h4 className="text-monospace"> <b> Get In touch </b></h4>
          <div class="row mb-4">
            <div class="col">
              <div class="form-outline">
                <input type="text" placeholder="enter your name" id="form3Example1" class="form-control" />
                <label class="form-label" for="form3Example1">
                  First name
                </label>
              </div>
            </div>
            <div class="col">
              <div class="form-outline">
                <input type="Number" placeholder="enter your Number" id="form3Example2" class="form-control" />
                <label class="form-label" for="form3Example2">
                  Phone Number
                </label>
              </div>
            </div>
          </div>

          <div class="form-outline mb-4">
           
            <input type="email " placeholder="enter your Email" id="form3Example3" class="form-control" />
            <label class="form-label" for="form3Example3">
              Email address
            </label>
          </div>
          <div class="form-outline mb-4">
            <textarea type="text" placeholder="enter your Message" id="form3Example4" class="form-control" />
            <label class="form-label" for="form3Example4">
              message
            </label>
          </div>
          <div class="form-check d-flex justify-content-center mb-4"></div>
          <button type="submit" class="btn btn-primary btn-sm btn-block mb-4">
            send message
          </button>
        </form>
      </div>
      
    </>
  );
};

export default Contact;
