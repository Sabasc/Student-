import React, { useState } from 'react'
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 
import Sign_img from './Sign_img'
import { json, useNavigate } from 'react-router-dom'

const Login = () => {

  const history = useNavigate() // hook
  const [inpval, setInpval] = useState({
    email:"",
    password:""
  })

  const [data,setData] =useState([]);
  console.log(inpval);

  const getdata = (e) => {

      const{value,name} = e.target;
      // console.log(value,name);

      setInpval(() =>{
        return{
          ...inpval,[name]:value
        }
       })
  }

  const addData = (e)=>{
    e.preventDefault();

    const getuserArr = localStorage.getItem("useryoutube");
    console.log(getuserArr);//when we signin we have to get same data which we added in signup

    const {email,password} = inpval;

   if(email === ""){
      alert("email field is required")
    }else if(!email.includes("@")){
      alert("plz enter valid email address")
  }else if (password === ""){
    alert("password field is required")
  }else if(password.length <5){
    alert("password length greater five")
  }else{

      if(getuserArr && getuserArr.length){
        const userdata = JSON.parse(getuserArr);
        const userlogin = userdata.filter((el,k) =>{
            return el.email === email && el.password === password
        });

        if(userlogin.length === 0){
          alert("Incorrect emaill & password")
        }
        else{
          console.log("user login successfully");

          localStorage.setItem("user_loing",JSON.stringify(getuserArr)) //at detail page we need date validation
          history("/details")
        }
        
       
          }
       }
  }
  return (
   <>
   <div className='container'>
    <section className='d-flex justify-content-between'>
        <div className='left_data mt-3 p-5' style={{width:"100%"}}> 
            <h3 className='text-center col-lg-6 '>Sign In</h3>

            <Form>
  
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
    
    <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter your Email" />
    </Form.Group>
   
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
    <Form.Control type="password" onChange={getdata} name="password" placeholder="password" />
    
     </Form.Group> 
     
     <Button variant="primary col-lg-6" onClick={addData} style={{background:'rgba(210,88,21,255)'}} type="submit">
        Submit
      </Button>
    </Form>

      <p className='mt-3'>Already Have an Account <span>SignIn</span></p>
        </div>
     <Sign_img/>
    </section>
  </div>
   </>
  )
}

export default Login
