import React, {useState, useEffect}  from 'react';
import {Redirect} from 'react-router-dom'
import "./RegisterForm.scss";

import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import { Form, FormInput, FormGroup, Button} from "shards-react";
import {Form, Button, Input,Icon} from 'semantic-ui-react';
import {motion} from 'framer-motion';
// import {useTransition, animated} from 'react-spring';

const RegisterForm = ({setAlert, register, isAuthenticated, setSelectedForm}) => {
    

    //form state
    const [valueForm, setValueForm] = useState({
        name:'',
        email:'',
        password:'',
        password2:'',
        age:null
    });


    const { name, email, password, age, password2 } = valueForm;

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
    const onSubmit = async e =>{
        e.preventDefault();

        if (password !== password2 && age<18){
            // toast warning passwords
            setAlert('Passwords do not match', 'danger');
            //console.log('passwords not equal or user is too young');

        }else{ //passwords equal & user is old
            register({name, email, password})
        }
    }

    // console.log(isAuthenticated);
    if(isAuthenticated) { return <Redirect to="/layout" />}

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
            <h2>Register</h2>
            <Form onSubmit={onSubmit} onChange={onChange} className="register_component__form_field">
                <Form.Field>
                    <Input 
                    name="name"
                    icon="user"
                    error={formError.name} 
                    placeholder='Name' />
                    {formError.username && (
                        <span className="error-text">Write your name properly, please.</span>
                    )}
                </Form.Field>
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
                <Form.Field>
                    <Input 
                    name="password2" 
                    type={showPass ? "text" : "password"}
                    error={formError.password2} 
                    icon={showPass ? (
                        <Icon  name ="eye slash" link onClick={handlerShowPassword} />
                    ) : (
                        <Icon name="eye" link onClick={handlerShowPassword} />
                    )}
                    placeholder='Repeat Password' />

                    {formError.password2 && (
                        <span className="error-text">
                            Password must be larger than 6 charactrers
                        </span>
                    )}
                </Form.Field>
                <Form.Field>
                    <Input 
                    name="age" 
                    icon="calendar"
                    placeholder='Age' 
                    type="number" 
                    error={formError.age} 
                    min={18} />
                </Form.Field>
                <Button type='submit' color='blue'>Submit</Button>
            </Form>
            <br/><br/><br/>
            <p>
                Padlock Account? <span onClick={()=>setSelectedForm("login")}>Log In</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
            </p>
        </motion.div>
        
    )
}
RegisterForm.propTypes = {
    setAlert: PropTypes.func.isRequired,
    register: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool
   
}

const mapStateToProps = (state) => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated
})

export default connect(mapStateToProps, {setAlert, register})(RegisterForm);