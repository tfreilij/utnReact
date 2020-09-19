import React from 'react';
import Field from './Field'
import './Form.css';

class Form extends React.Component {

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

export default Form;