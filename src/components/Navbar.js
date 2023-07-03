import React from 'react'
import "../styles/nav.css"
import Name from './Name'
import { color, easeIn, motion, spring, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-router-dom'

const Navbar = (referenece) => {
    const { scrollY } = useScroll();
    const left = useTransform(scrollY, [450,1000], [30, -550]);

    const variants = {
        visible : {opacity: 1, scale: 1},
        hidden : { opacity: 0, scale: 0}
    };
    const [visible, setVisible] = React.useState(false);
    function update() {
        if (scrollY?.current > 350) {
          setVisible(true);
        } else {
          setVisible(false);
        }
        // if (scrollY?.current < scrollY?.prev) {
        //   setHidden(false);
        // } else if (scrollY?.current > 100 && scrollY?.current > scrollY?.prev) {
        //   setHidden(true);
        // }
      }
    
      /** update the onChange callback to call for `update()` **/
      React.useEffect(() => {
        return scrollY.on("change",() => update());
      });

  return (
    <div className='navbar-container'>
        <motion.nav className='navbar' 
        initial="hidden"
        animate={visible ? "visible" : "hidden"}
        variants={variants}
        >
            <div style={{width:150}}>
            </div>
            <motion.div className='name-container' style={{x: left}}>
            <Name />
            </motion.div>
            <ul>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}>ABOUT</motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}>SKILLS</motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}>MY WORK</motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}>CONTACT</motion.li>
            </ul>
        </motion.nav>
    </div>
  )
}

export default Navbar