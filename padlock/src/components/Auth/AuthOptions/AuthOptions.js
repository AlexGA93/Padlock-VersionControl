import React, {useState, useEffect} from 'react';

import {Button} from 'shards-react';
import {useTransition, animated} from 'react-spring';

import './AuthOptions.scss';

export default function AuthOptions(props) {
    

    const {setSelectedForm} = props;
    const [isVisible, setIsVisible] = useState(false);
    //timer state
    const [ toggler, setToggler] = useState(false);

    const transition = useTransition(isVisible, {
        from:{ x:-100, y:0, opacity:0},
        enter:{ x:0, y:0, opacity:1},
        leave:{ x:-100, y:0, opacity:0}
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
            <div className="auth_options">
                <p className="auth_options__bio">
                    Padlock is a Front End project built with Electron.js, React.jsand Sass in communion with a Back End built with Node.js, Docker and MongoDB as database
                </p>
                {/* <Button  onClick={ () =>setIsVisible(!isVisible)} theme='info'>Choose your Option</Button>  */}
                <br/>
                <br/>
                {
                    transition((style,item) => item ? (
                        <animated.div className="auth_options__buttons_box" style={style}>
                            <Button onClick={() => setSelectedForm("register")}>Register</Button> 
                            <Button  onClick={() => setSelectedForm("login")} theme='info'>Log In</Button>
                        </animated.div>
                    ) : (''))
                }
            </div>   
    )

}
