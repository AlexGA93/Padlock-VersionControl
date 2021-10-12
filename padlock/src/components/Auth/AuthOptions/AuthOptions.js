import React from 'react';

import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {Button} from 'shards-react';
import {motion} from 'framer-motion';

import './AuthOptions.scss';




 const  AuthOptions = ({setSelectedForm}) => {
    


    return (
            <div className="auth_options">
                <p className="auth_options__bio">
                    Padlock is a password manager built with the following technologies: A Front End application built with Electron.js, React.js and Sass in communion with a Back End built with Docker, Node.js, express.js and MongoDB as a non-relational database.
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
                    duration:0.5 //change in the future
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
                    opacity:0
                }}

                transition={{
                    type:"spring",
                    duration:0.6 //change in the future
                }}
                >
                    <Button  className="auth_options__buttons_box__login" onClick={() => setSelectedForm("login")} theme='info'>Log In</Button>
                </motion.div>
               
            </div>   
    )

}

AuthOptions.propTypes = {
    setSelectedForm: PropTypes.func.isRequired,
    isAuthenticated: PropTypes.bool,
}

const mapStateToProps = state => ({
 //defining with redux structure
 isAuthenticated : state.auth.isAuthenticated
})

export default connect(mapStateToProps)(AuthOptions);