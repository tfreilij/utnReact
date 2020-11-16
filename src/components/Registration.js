import React, { useState } from 'react';
import { Form, Button } from 'react-bootstrap';
import { createUserWithEmailAndPassword , addNewUser} from '../Services/UsersServices';


function Registration() {
   
    const [form,setForm] = useState({name:'',
                                    apellido:'',
                                    email:'',
                                    password:''
                                    });
    
    const handleSubmit = (e) => {

        const email = form.email;
        const password = form.password;
        const name  = form.name;
        const surname = form.surname

        createUserWithEmailAndPassword(email,password)
        .then( data => {
            const userId = data.user.uid
            console.log(data)
            addNewUser(name,surname,email,userId)
            .then(data => { console.log("data database",data)})
            .catch(error => {
                console.log("error database", error)  
            })
            }
        )
        .catch(err => {
            console.log(err)
        })

    }
    const handleChange = (e) => {
        const target = e.target;
        const name = target.name;
        const value = target.value;

        setForm({
            ...form,
            [name]:value
        });
    }

    return (

        <Form>
            <Form.Group >
        <Form.Label>Name</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="name" placeholder="Password" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Surname</Form.Label>
        <Form.Control onChange={handleChange} type="text" name="surname" placeholder="Password" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Email address</Form.Label>
        <Form.Control onChange={handleChange} type="email" name="email" placeholder="Enter email" />
      </Form.Group>
      <Form.Group >
        <Form.Label>Password</Form.Label>
        <Form.Control onChange={handleChange} type="password" name="password" placeholder="Password" />
      </Form.Group>

      <Button onClick={handleSubmit} variant="primary" type="submit">
       Accept
      </Button>
      
    </Form>
      
    )

    

}

export default Registration;