import React from 'react'
import { motion, whileTap,  useTransform, useScroll, useAnimation } from 'framer-motion'

const Name = () => {
    const { scrollY } = useScroll();
    const colorScale = useTransform(scrollY, [500, 1000], ["#45CAFF", "#59C378"]);
  return (
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
  )
}

export default Name