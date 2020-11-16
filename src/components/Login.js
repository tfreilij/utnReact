import React, {useState } from 'react';

import { Form, Button } from 'react-bootstrap';
import { signInWithEmailAndPassword } from '../Services/UsersServices';
import { useHistory } from "react-router-dom";


function Login() {

    const [form,setForm] = useState({
      email:'',
      password:''
    });

    const history = useHistory();
    
    const handleClick = (e) =>{
      

      const email = form.email;
      const password = form.password;
      signInWithEmailAndPassword(email,password)
      .then( data => {
        alert("Logged in succesfully");
        history.push("/")
      })
      .catch( err => {
        const errorCode = err.code;
        console.log("login error", err)

        if ( errorCode === "auth/wrong-password") {
          alert("Wrong password")
        }
        else if ( errorCode === "auth/user-not-found") {
          alert("User doesnt exist")
        }
      })



    }
    const handleChange = (e) => {
      const target = e.target;
      setForm({
        ...form,
        [target.name]:target.value
      })
    }

   
    return(
      <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleClick} variant="primary" >
       Accept
      </Button>
      
    </Form>
    ) 

       

}

export default Login;