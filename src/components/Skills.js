import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {skills} from '../api/skills';
import '../styles/skills.css';
import { motion, useInView } from 'framer-motion';

const Skills = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 10
        },
        desktop: {
          breakpoint: { max: 3000, min: 1324 },
          items: 7
        },
        tablet: {
          breakpoint: { max: 1324, min: 922},
          items: 5
        },
        smallTablet: {
          breakpoint: {max: 922, min: 800 },
          items: 4
        },
        bigMobile: {
          breakpoint: { max: 800, min: 460 },
          items: 3
        },
        mobile: {
          breakpoint: { max: 460, min: 0 },
          items: 1
        }
      };

  return (
    <>
    <div name='skills' className='skills-section'>

      <div ref = {ref} style={{transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      <h3>MY SKILLS SO FAR</h3>
      <h4>What I work on</h4>
      </div>

        <motion.div className='cards-container' ref = {ref} style={{transform: isInView ? "none" : "translateY(50px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"}}>
        <Carousel swipeable={true}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2000}
          // customTransition="transform 300ms ease-in-out"
          // transitionDuration={1000}
          slidesToSlide={1}
          containerClass="cards-container"
          removeArrowOnDeviceType='{["smallTablet","bigMobile","tablet", "mobile", "desktop", "superLargeDesktop"]}'
          >
        {skills.map((skill) => (
                <div className='card-container'>
                    <div className='skill-logo'>
                        {skill.icon}
                    </div>
                    <div className='skill-name'>
                        {skill.skill}
                    </div>
                </div>
            ))}
        </Carousel>
        </motion.div>
    </div>
    </>
  )
}

export default Skills