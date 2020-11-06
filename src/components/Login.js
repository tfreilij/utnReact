import React, {useState } from 'react';
import firebase from '../Config/firebase';


import { Form, Button } from 'react-bootstrap';


function Login() {

    const [form,setForm] = useState({
      user:'',
      password:''
    });

    const handleClick = () => alert(form.user + " " + form.password);
    const handleChange = (e) => {
      const target = e.target;
      console.log(target.name)
      console.log(target.value)
      setForm({
        ...form,
        [target.name]:target.value
      })
    }

   
    return(
      <Form>
      <Form.Group controlId="formGroupEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="user" placeholder="Enter email" />
      </Form.Group>
      <Form.Group controlId="formGroupPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Button onClick={handleClick} variant="primary" type="submit">
       Accept
      </Button>
      
    </Form>
    ) 

       

}

export default Login;