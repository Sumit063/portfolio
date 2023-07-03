import React from 'react'
import '../styles/about.css'
import img from './man.png'
import Lottie from 'react-lottie'
import userLottie from '../lotties/user.json'
import { DownloadBtn } from './DownloadBtn'

const About = () => {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: userLottie,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice"
    }
  };
  return (
    <div className='about-container snapper'>
      <div className='lottie-wrapper'>
      <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        />
      </div>
      <div className='about-me'>
        <div className='about-me-text'>
            <h3>ABOUT ME</h3>
            <h4>WHY HIRE ME?</h4>
            <p>I'm 22 years old creative software developer based in Delhi, India specialising in Web Development. I build clean, appealing and functional interfaces which comply with the modern web standards.</p>
            <p>I'm currently a final year undergrad college student pursuing B.Tech Information Technology.</p>
            <p>I'm a React Developer exploring the depths of MERN stack.</p>
        </div>
      </div>
      <div className='resume-download'>
        <a href='https://drive.google.com/file/d/1RPALCzJSeWLuSZPpwTMJAfQXKgunzf3n/view?usp=sharing' target='_blank'><DownloadBtn btntext='My Resume'/></a>
      </div>
      </div>
  )
}

export default About