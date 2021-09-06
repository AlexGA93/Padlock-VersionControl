import React, {useState, useEffect} from 'react';
import "./LoginForm.scss";
import { Form, FormInput, FormGroup, Button} from "shards-react";
import {useTransition, animated} from 'react-spring';


export default function LoginForm(props) {
    const {setSelectedForm} = props;
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
            <animated.div className="login_component" style={style}>
                <h2>Log In</h2>
                <Form className="login_component__form_field">
                    <FormGroup className="login_component__form_field__email">
                        <FormInput id="#email" placeholder="Email" />
                    </FormGroup>
                    <FormGroup className="login_component__form_field__password">
                        <FormInput type="password" id="#password" placeholder="Password" />
                    </FormGroup>
                    <Button className="login_component__submit_button">Submit</Button>
                </Form>
                <p>
                    Not Padlock Account? <span onClick={()=>setSelectedForm("register")}>Register</span> or <span onClick={()=>setSelectedForm(null)}>back</span>
                </p> 
            </animated.div>
        ) : (''))
    )
}
