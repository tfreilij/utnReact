import React from 'react';
import Field from './Field';


function Login() {

    let formStyle = {
        padding: "10px",
        border: "2px solid blue",
        margin: "10px auto",
        width: "70%",
        textAlign: "center"
    }

    return(
        <div style={formStyle}>
            <Field label={"User"}/>
            <Field label={"Password"}/>
            <button> Login </button>
        </div>
    ) 

       

}

export default Login;