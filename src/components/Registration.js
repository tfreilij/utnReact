import React from 'react';
import Field from './Field'

function Registration() {

    let formStyle = {
        padding: "10px",
        border: "2px solid blue",
        margin: "10px auto",
        width: "70%",
        textAlign: "center"
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