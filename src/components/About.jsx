import React, { useRef } from 'react'
import '../styles/about.css'
import img from './man.png'
import Lottie from 'react-lottie'
import userLottie from '../lotties/user.json'
import { DownloadBtn } from './Buttons'
import { motion, useInView, useScroll } from 'framer-motion'

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const { scrollY } = useScroll();
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: userLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div name='about' className='about-container snapper'>
      <motion.div className='lottie-wrapper' ref = {ref} style={{transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={290}
        />
      </motion.div>
      <motion.div className='about-me' ref = {ref} style={{transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"}}>
        <div className='about-me-text'>
            <h3>ABOUT ME</h3>
            <h4>WHY HIRE ME?</h4>
            <p>I'm 22 years old creative software developer based in Delhi, India specialising in Web Development. I build clean, appealing and functional interfaces which comply with the modern web standards.</p>
            <p>I'm currently a final year undergrad college student pursuing B.Tech Information Technology.</p>
            <p>I'm a React Developer exploring the depths of MERN stack.</p>
        </div>
      </motion.div>
      <motion.div className='resume-download' ref = {ref} style={{transform: isInView ? "none" : "translateX(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s"}}>
        <a href='https://drive.google.com/file/d/1RPALCzJSeWLuSZPpwTMJAfQXKgunzf3n/view?usp=sharing' target='_blank'><DownloadBtn btntext='My Resume'/></a>
      </motion.div>
      </div>
  )
}

export default About