import React from 'react'
import "../styles/nav.css"
import Name from './Name'
import { color, easeIn, motion, spring, useScroll, useTransform } from 'framer-motion'
import { Link } from 'react-scroll';

const Navbar = (referenece) => {
    const { scrollX,scrollY } = useScroll();
    const viewportWidth = window.innerWidth;
    const maxScroll = viewportWidth /2 - 210;
    const left = useTransform(scrollY, [450,1000], [10, -maxScroll]);
    const maxScrollX = useTransform(scrollX, value => Math.max(0, value));

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
            <motion.div className='name-container' style={{ x: left}}>
            <Name />
            </motion.div>
            <ul>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}><Link to='about' smooth duration={500}>ABOUT</Link></motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}><Link to='skills' smooth duration={500}>SKILLS</Link></motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}><Link to='work' smooth duration={500}>MY WORK</Link></motion.li>
                <motion.li whileHover={{color:'#59C378', borderBottom:'2px solid', borderRadius: 3}}><Link to='contact' smooth duration={500}>CONTACT</Link></motion.li>
            </ul>
        </motion.nav>
    </div>
  )
}

export default Navbar