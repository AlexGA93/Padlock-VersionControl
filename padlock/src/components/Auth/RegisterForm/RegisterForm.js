import React from 'react';
import "./RegisterForm.scss";
import { Form, FormInput, FormGroup, Button} from "shards-react";

export default function LoginForm(props) {
    const{setSelectedForm} = props;

    return (
        <div className="register_component">
            <h2>Register</h2>
            <Form className="register_component__form_field">
                <FormGroup clasName="register_component__form_field__name">
                    <FormInput id="#name" placeholder="Name" />
                </FormGroup>
                <FormGroup clasName="register_component__form_field__email">
                    <FormInput id="#email" placeholder="Email" />
                </FormGroup>
                <FormGroup clasName="register_component__form_field__password">
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                <FormGroup clasName="register_component__form_field__password2">
                    <FormInput type="password" id="#password2" placeholder="Repeat Password" />
                </FormGroup>
                <FormGroup clasName="register_component__form_field__age">
                    <FormInput type="number" id="#age" placeholder="Age" />
                </FormGroup>
                <Button className="register_component__submit_button">Submit</Button>
            </Form>

            <p>
                Padlock Account? <span onClick={()=>setSelectedForm("login")}>Log In</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
            </p>
        </div>
        
    )
}
