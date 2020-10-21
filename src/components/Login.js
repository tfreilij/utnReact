import React from 'react';

import Field from './Field';


function Login() {


    return(
        <div className="form">
            <Field label={"User"}/>
            <Field label={"Password"}/>
            <button> Login </button>
        </div>

    ) 

       

}

export default Login;