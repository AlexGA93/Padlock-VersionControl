import React from 'react';
import "./LoginForm.scss";
import { Form, FormInput, FormGroup, Button} from "shards-react";

export default function LoginForm(props) {
    const {setSelectedForm} = props;

    return (
        <div className="login_component">
            <h2>Log In</h2>
            <Form className="login_component__form_field">
                <FormGroup clasName="login_component__form_field__email">
                    <FormInput id="#email" placeholder="Email" />
                </FormGroup>
                <FormGroup clasName="login_component__form_field__password">
                    <FormInput type="password" id="#password" placeholder="Password" />
                </FormGroup>
                <Button className="login_component__submit_button">Submit</Button>
            </Form>
            <p>
                Not Padlock Account? <span onClick={()=>setSelectedForm("register")}>Register</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
            </p>
            
        </div>
    )
}
