import React, { useEffect } from 'react'
import { useInView } from "react-intersection-observer";
import { motion, whileTap,  useTransform, useScroll, useAnimation } from 'framer-motion'

const Header = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();
    const { scrollY } = useScroll();
    const shrinkScale = useTransform(scrollY, [0, 300], [1, 0.5]);
    const growScale = useTransform(scrollY, [0, 300], [1, 5]);
    const colorScale = useTransform(scrollY, [0, 200], ["#FF1B6B", "#45CAFF"]);
    const left = useTransform(scrollY, [0, 400], [0, -1000]);
    const right = useTransform(scrollY, [0, 400], [0, 1000]);
    const up = useTransform(scrollY, [0, 400], [0, -500]);
    const variants = {
        visible : {opacity: 1, scale: 1, transition: { delay: 1, duration: 0.5}},
        hidden : { opacity: 0, scale: 0}
    };

    const isOpen = (scrollY > 30 ? true : false)
    useEffect(() => {
        if(inView) {
            controls.start("visible");
        }
        else {
            controls.start("hidden");
        }
        console.log(isOpen)
    }, [controls, inView]);
  return (
        <motion.div
        className='header-text'
        style={{
            scale: shrinkScale,
        }}
        >
            
                <motion.p
                whileHover={{ scale: 1.2 }}
                style={{ x: left, scale: growScale}}
                >
                    {"<"}
                </motion.p>
                <motion.h1 drag
                dragSnapToOrigin
                dragConstraints={{top:10, left: 10, right: 10, bottom: 10}}
                dragElastic={0.3}
                >
                    <div className='name-container'>
                    <motion.p whileHover={{ scale: 1.2 }} style={{color: colorScale}}>S</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>U</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>M</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>I</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>T</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}> &nbsp;</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }} style={{color: colorScale}}>P</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>A</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>N</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>D</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>E</motion.p> 
                    <motion.p whileHover={{ scale: 1.2 }}>Y</motion.p> 
                    </div>
                </motion.h1>
                <motion.p
                whileHover={{ scale: 1.2 }}
                style={{y: up, rotate: up, scale: growScale, color: colorScale}}>
                    /
                </motion.p>
                <motion.p
                whileHover={{ scale: 1.2 }}
                style={{ x: right, scale: growScale, cursor: 'pointer'}}
                >
                    {">"}
                </motion.p>

            {/* <motion.div
            className="braces"
            ref={ref}
            animate={controls}
            initial="hidden"
            variants={variants}
            
            >
                <p>{"{ "}</p>
                <p>{"}"}</p>
                </motion.div> */}
        </motion.div>
  )
}

export default Header