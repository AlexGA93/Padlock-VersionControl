import React, {useState, useEffect} from 'react';

import {Redirect} from 'react-router-dom';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import "./LoginForm.scss";
// import { Form, FormInput, FormGroup, Button} from "shards-react";
import {Form, Input,Icon} from 'semantic-ui-react';
import {motion} from 'framer-motion';
// import {useTransition, animated} from 'react-spring';
import { setAlert } from '../../../actions/alert';
import { login } from '../../../actions/auth';

 const LoginForm = ({auth:{user},login, isAuthenticated, setSelectedForm}) => {
    
    //form state
    const [valueForm, setValueForm] = useState({
        email:'',
        password:''
    });

    const {email, password} = valueForm;

    // form error state
    const [formError, setFormError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const handlerShowPassword = () => {
        setShowPass(!showPass);
    }
    // update Form values with every change in form's inputs
    const onChange = e =>{
        setValueForm({
            ...valueForm, 
            [e.target.name]:e.target.value 
        });
    }
    const onSubmit = e =>{
        e.preventDefault();
        login({email, password});
       
    }

    if(isAuthenticated && user) { 
        return <Redirect to="/layout" /> // Redirect to Loggedlayout
    }
    return (
        <motion.div
        className="register_component"
        animate={{
            x:"1rem",
            opacity:1
        }}
        initial={{
            opacity:0.1
        }}

        transition={{
            type:"spring",
            duration:1 //change in the future
        }}
        >
            <h2>Log In</h2>
            <Form onSubmit={onSubmit} onChange={onChange} className="login_component__form_field">
                <Form.Field>
                    <Input 
                    name="email" 
                    icon = "mail"
                    error={formError.email} 
                    placeholder='Email' />
                </Form.Field>
                <Form.Field>
                    <Input 
                    name="password" 
                    type={showPass ? "text" : "password"}
                    error={formError.password} 
                    icon={showPass ? (
                        <Icon  name ="eye slash" link onClick={handlerShowPassword} />
                    ) : (
                        <Icon name="eye" link onClick={handlerShowPassword} />
                    )}
                    placeholder='Password' />

                    {formError.password && (
                        <span className="error-text">
                            Password must be larger than 6 charactrers
                        </span>
                    )}
                </Form.Field>
                <button type='submit' color='blue'>Submit</button>
            </Form>
            <br/>
            <br/>
            <p>
                Not Padlock Account? <span onClick={()=>setSelectedForm("register")}>Register</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
            </p> 
        </motion.div>
    )
}

LoginForm.propTypes = {
    login: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
    auth:PropTypes.object.isRequired
}

const mapStatToProps = state => ({
 //defining with redux structure
 isAuthenticated : state.auth.isAuthenticated,
 auth:state.auth
})

export default connect(mapStatToProps, {setAlert, login})(LoginForm);
