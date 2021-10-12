import React from 'react';
import {Link} from 'react-router-dom';

import {motion} from 'framer-motion';
import {Icon, Divider} from 'semantic-ui-react';
import './MenuItem.scss';

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 }
      }
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 }
      }
    }
};
// const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];
const icons = ["shield","plus","edit","eraser","power off"];


const labels = ["View Services","Add Service","Edit Service","Delete Service","Log out"];
const routes = ["/layout","/service/new","/service/edit/:service_id","/delete","/logout"]
export default function MenuItem(props) {
    const {i} = props;
    
    return (
        <>
          <motion.li
          className="motionList"
          variants={variants}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          > 
            
            <Icon className="motionList__icon-placeholder"name={`${icons[i]}`} size="large" />
            {/* <div  className="motionList__icon-placeholder" style={style} >
              
            </div> */}
            <div className="motionList__text-placeholder" style={{ border: '2px solid white ' }}>
              <Link className="motionList__text-placeholder__link" to={routes[i]}>{labels[i]}</Link>
            </div> 
              
          </motion.li>
          <Divider horizontal className="motionList-divider"/>
        </>
    );
}
