import React, { useState } from 'react';
import Field from './Field'
import firebase from '../Config/firebase'

function Registration() {

    let formStyle = {
        padding: "10px",
        border: "2px solid blue",
        margin: "10px auto",
        width: "70%",
        textAlign: "center"
    }
    
    const [form,setForm] = useState({name:'',
                                    apellido:'',
                                    email:'',
                                    password:''
                                    });
    
    const handleSubmit = (e) => {
        firebase.auth.createUserWithEmailAndPassword(form.email,form.password)
        .then( data => {
                console.log(data)
                firebase.database.collection("usuarios").add({
                    nombre:form.nombre,
                    apellido:form.apellido,
                    email:form.email,
                    userId:data.user.uid
                })
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
        <div style={formStyle}>
            <Field label={"Nombre"} />
            <Field label={"Apellido"} />
            <Field label={"Email"}/>
            <Field label={"Telefono"}/>
            <Field label={"Password"}/>
            <Field label={"Confirmar password"}/>

        </div>
    )

    

}

export default Registration;