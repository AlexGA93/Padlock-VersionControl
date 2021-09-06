import React, {useState, useEffect}  from 'react';
import "./RegisterForm.scss";
// import { Form, FormInput, FormGroup, Button} from "shards-react";
import {Form, Button, Input,Icon} from 'semantic-ui-react';
import {useTransition, animated} from 'react-spring';

export default function LoginForm(props) {
    const{setSelectedForm} = props;
    //form state
    const [valueForm, setValueForm] = useState({
        name:'',
        email:'',
        password:'',
        age:''
    });
    // form error state
    const [formError, setFormError] = useState({});
    const [showPass, setShowPass] = useState(false);
    const [isVisible, setIsVisible] = useState(false);
    //timer state
    const [ toggler, setToggler] = useState(false);

    const transition = useTransition(isVisible, {
        from:{ x:-200, y:0, opacity:0},
        enter:{ x:0, y:0, opacity:1},
        leave:{ x:0, y:0, opacity:0}
    });

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
    const onSubmit =()=>{
        // if we submit form error is empty
        setFormError({});

        //submit data somehow 
        console.log(valueForm);
    }

    useEffect(() =>{
        if(!toggler){
            setTimeout(() => {
                setIsVisible(!isVisible);
            }, 500)
           setToggler(!toggler);
            
        }
    }, [isVisible]);

    return (
        transition((style, item) => item ? (
            <animated.div className="register_component" style={style}>
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
                        name="age" 
                        icon="calendar"
                        placeholder='Age' 
                        type="number" 
                        error={formError.age} 
                        min={18} />
                    </Form.Field>
                    <Button type='submit' color='blue'>Submit</Button>
                </Form>
                <br/>
                <p>
                    Padlock Account? <span onClick={()=>setSelectedForm("login")}>Log In</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
                </p>
            </animated.div>
        ) : (''))
    )
}
