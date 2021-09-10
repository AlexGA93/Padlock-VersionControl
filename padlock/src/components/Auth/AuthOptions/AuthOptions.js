import React, {useState, useEffect} from 'react';

import {Button} from 'shards-react';
import {motion} from 'framer-motion';
// import {useTransition, animated} from 'react-spring';

import './AuthOptions.scss';




export default function AuthOptions(props) {
    

    const {setSelectedForm} = props;
    const [isVisible, setIsVisible] = useState(false);
    //timer state
    const [ toggler, setToggler] = useState(false);

    // const transition = useTransition(isVisible, {
    //     from:{ x:-100, y:0, opacity:0},
    //     enter:{ x:0, y:0, opacity:1},
    //     leave:{ x:-100, y:0, opacity:0}
    // });

    // useEffect(() =>{
    //     if(!toggler){
    //         setTimeout(() => {
    //             setIsVisible(!isVisible);
    //         }, 1000)
    //        setToggler(!toggler);
            
    //     }
    // }, [isVisible, toggler]);


    return (
            <div className="auth_options">
                <p className="auth_options__bio">
                    Padlock is a Front End project built with Electron.js, React.jsand Sass in communion with a Back End built with Node.js, Docker and MongoDB as database
                </p>
                {/* <Button  onClick={ () =>setIsVisible(!isVisible)} theme='info'>Choose your Option</Button>  */}
                <br/>
                <br/>
                <motion.div
                className="auth_options__buttons_box"
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
                    <Button className="auth_options__buttons_box__register" onClick={() => setSelectedForm("register")}>Register</Button> 
                    
                </motion.div>
                <motion.div
                className="auth_options__buttons_box"
                animate={{
                    x:"20rem",
                    opacity:1
                }}
                initial={{
                    opacity:0.1
                }}

                transition={{
                    type:"spring",
                    duration:1.2 //change in the future
                }}
                >
                    <Button  className="auth_options__buttons_box__login" onClick={() => setSelectedForm("login")} theme='info'>Log In</Button>
                </motion.div>
               
            </div>   
    )

}