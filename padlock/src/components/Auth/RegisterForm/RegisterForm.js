import React, {useState, useEffect}  from 'react';
import {Redirect} from 'react-router-dom';
import "./RegisterForm.scss";
import { toast } from 'react-toastify';
import { setAlert } from '../../../actions/alert';
import { register } from '../../../actions/auth';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

// import { Form, FormInput, FormGroup, Button} from "shards-react";
import {Form, Input,Icon} from 'semantic-ui-react';
import {motion} from 'framer-motion';
// import {useTransition, animated} from 'react-spring';

const RegisterForm = ({auth:{user},setAlert, register, isAuthenticated, setSelectedForm}) => {
    
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
        if( age < 18){
            toast.warning("User too young to use this service");
            setAlert('user too young', 'danger');
        }else if(password !== password2){
            toast.warning("Passwords do not match!!");
            setAlert('passwords not equal', 'danger');
        } else {
            register({name, email, password})
        }
    }

    // console.log(isAuthenticated);
    if(isAuthenticated && user) { 
        return <Redirect to="/layout" />
        // return (
        // <div>
        //     <h1>{user.data.name}</h1>
        //     <h2>{user.data.email}</h2>
        //     <h2>{user.data.password}</h2>
        // </div>
        // )
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
                />
                </Form.Field>
                <button type='submit' color='blue'>Submit</button>
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
    isAuthenticated: PropTypes.bool,
    auth:PropTypes.object.isRequired
   
}

const mapStateToProps = (state) => ({
    //defining with redux structure
    isAuthenticated: state.auth.isAuthenticated,
    auth:state.auth
})

export default connect(mapStateToProps, {setAlert, register})(RegisterForm);
