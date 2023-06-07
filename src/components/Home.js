import React, { useState } from 'react'
import Form from 'react-bootstrap/Form' 
import Button from 'react-bootstrap/Button' 
import Sign_img from './Sign_img'
import { NavLink } from 'react-router-dom'
import Login from './Login'

const Home = () => {

  const [inpval, setInpval] = useState({
    name:"",
    email:"",
    data:"",
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

    const {name,email,date,password} = inpval;

    if(name === ""){
      alert("name field is required")
    }else if(email === ""){
      alert("email field is required")
    }else if(!email.includes("@")){
      alert("plz enter valid email address")
    }else if(date ===""){
    alert("date is required")
  }else if (password === ""){
    alert("password field is required")
  }else if(password.length <5){
    alert("password length greater five")
  }else{
    console.log("data added")

    localStorage.setItem("useryoutube",JSON.stringify([...data,inpval]));
  }
  }
  
  return (
  <>
  <div className='container'>
    <section className='d-flex justify-content-between'>
        <div className='left_data mt-3 p-5' style={{width:"100%"}}> 
            <h3 className='text-center col-lg-6 '>Sign Up</h3>

            <Form>
      <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
    
    <Form.Control type="text" onChange={getdata} name="name" placeholder="Enter your Name" />
    </Form.Group> 
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicEmail">
    
    <Form.Control type="email" onChange={getdata} name="email" placeholder="Enter your Email" />
    </Form.Group>
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">

    <Form.Control type="date"name="date" onChange={getdata} />
    </Form.Group>
    <Form.Group className="mb-3 col-lg-6" controlId="formBasicPassword">
    <Form.Control type="password" onChange={getdata} name="password" placeholder="password" />
    

   </Form.Group>
     

      <Button variant="primary col-lg-6" onClick={addData} style={{background:'rgba(210,88,21,255)'}} type="submit">
        Submit
      </Button>
    </Form>

      <p className='mt-3'>Already Have an Account <span><NavLink to={"/Login"}>SignIn</NavLink> </span></p>
        </div>
     <Sign_img/>
    </section>
  </div>
  
  </>
  );
}

export default Home
