import React from 'react';
import Field from './Field'
import './Registration.css';

class Registration extends React.Component {

     render() {

        return (
            <div className="form">
                <Field label={"Nombre"} />
                <Field label={"Apellido"} />
                <Field label={"Email"}/>
                <Field label={"Telefono"}/>
                <Field label={"Password"}/>
                <Field label={"Confirmar password"}/>
            </div>
        )

    }

}

export default Registration;