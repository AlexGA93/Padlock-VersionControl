import React, {useState, useEffect}  from 'react';
import "./RegisterForm.scss";
import { Form, FormInput, FormGroup, Button} from "shards-react";
import {useTransition, animated} from 'react-spring';

export default function LoginForm(props) {
    const{setSelectedForm} = props;
    const [isVisible, setIsVisible] = useState(false);
    //timer state
    const [ toggler, setToggler] = useState(false);

    const transition = useTransition(isVisible, {
        from:{ x:-200, y:0, opacity:0},
        enter:{ x:0, y:0, opacity:1},
        leave:{ x:0, y:0, opacity:0}
    });

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
                <Form className="register_component__form_field">
                    <FormGroup className="register_component__form_field__name">
                        <FormInput id="#name" placeholder="Name" />
                    </FormGroup>
                    <FormGroup className="register_component__form_field__email">
                        <FormInput id="#email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className="register_component__form_field__password">
                        <FormInput type="password" id="#password" placeholder="Password" />
                    </FormGroup>
                    <FormGroup className="register_component__form_field__password2">
                        <FormInput type="password" id="#password2" placeholder="Repeat Password" />
                    </FormGroup>
                    <FormGroup className="register_component__form_field__age">
                        <FormInput type="number" id="#age" placeholder="Age" />
                    </FormGroup>
                    <Button className="register_component__submit_button">Submit</Button>
                </Form>

                <p>
                    Padlock Account? <span onClick={()=>setSelectedForm("login")}>Log In</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
                </p>
            </animated.div>
        ) : (''))
    )
}
