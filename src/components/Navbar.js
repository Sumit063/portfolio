import React from 'react'
import "../styles/nav.css"
import Name from './Name'
import { motion, useScroll } from 'framer-motion'

const Navbar = () => {
    const variants = {
        visible : {opacity: 1, scale: 1},
        hidden : { opacity: 0, scale: 0}
    };
    const { scrollY } = useScroll();
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
        variants={variants}>
            <div style={{width:150}}>

            </div>
            <div className='name-container'>
            <Name />
            </div>
            <ul>
                <li>ABOUT</li>
                <li>SKILLS</li>
                <li>MY WORK</li>
                <li>CONTACT</li>
            </ul>
        </motion.nav>
    </div>
  )
}

export default Navbar