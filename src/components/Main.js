import React from 'react'
import '../styles/main.css'
import Navbar from './Navbar'
import Lottie from 'react-lottie'
import animationData from '../lotties/developer.json'
import About from './About';
import Skills from './Skills.js';
import Projects from './ProjectCard';
import Contact from './Contact'
import SampleText from './SampleText'


const Main = () => {
    const defaultOptions = {
        loop: true,
        autoplay: true,
        animationData: animationData,
        rendererSettings: {
          preserveAspectRatio: "xMidYMid slice"
        }
      };  
    const intro = {hi: "Hey", intro : "I Am Sumit", bio: "I create visually pleasing interfaces for the web." , bio2: "I'm a passionate Front-End web developer having an experience of web applications with React.js with TypeScript & TailwindCSS."};
  return (
    <>
    <Navbar/>
    <div className='main-container' style={{paddingTop: 60, paddingBottom: 60}}>
        <div className='main-left'>
            <div className="intro">
                <h1>{ intro.hi }<span>!</span>&nbsp; { intro.intro }<span>.</span> </h1>
                <h2> I create <span>visually</span> pleasing interfaces for the web.</h2>
                <p>{intro.bio2}</p>
            </div>
        </div>
        <div className='right'>
        <Lottie 
	    options={defaultOptions}
        height={400}
        width={400}
        />
        </div>
    </div>
    <About />
     <Skills />
    <Projects />
    <Contact /> 
    {/* <SampleText /> */}
    </>
  )
}

export default Main