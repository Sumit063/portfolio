import React, { useRef } from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {projects} from '../api/projects';
import { Icon } from '@iconify/react';
import '../styles/project.css';
import { motion, useInView } from 'framer-motion';



const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 3
        },
        desktop: {
          breakpoint: { max: 3000, min: 1400 },
          items: 3
        },
        laptop: {
          breakpoint: { max: 1400, min: 1200 },
          items: 2
        },
        tabletBig: {
          breakpoint: { max: 1200, min: 1070 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1070, min: 0 },
          items: 1
        },
      };

  return (
    <>
    <div name='work' className='project-section'>
      <motion.div ref = {ref} style={{transform: isInView ? "none" : "translateY(20px)",
          opacity: isInView ? 1 : 0,
          transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"}}>
      <h3>CHECK OUT MY PROJECTS</h3>
      <h4>My Works</h4>
      </motion.div>

        <div className='project-cards-container'>
        <Carousel swipeable={false}
          draggable={true}
          responsive={responsive}
          infinite={true}
          autoPlay={true}
          autoPlaySpeed={2300}
          // customTransition="transform 300ms ease-in-out"
          // transitionDuration={1000}
          slidesToSlide={1}
          removeArrowOnDeviceType='{["tablet", "mobile", "desktop", "superLargeDesktop"]}'>
        {projects.map((project) => (
                <motion.div className='project-card-container' ref = {ref} style={{transform: isInView ? "none" : "translateY(20px)",
                opacity: isInView ? 1 : 0,
                transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s"}}>
                    <div className='project-img'>
                       <a href={project.site} target='_blank'><img src={project.img} className='main-img'></img></a>
                    </div>
                    <div className='project-tech'>
                        { project.tech }
                    </div>
                    <div className='project-name'>
                        <h3>{ project.name }</h3>
                    </div>
                    <div className='project-about'>
                        { project.about }
                    </div>
                    <div className='project-live'>
                        <div className='project-site'>
                          <Icon icon="icomoon-free:laptop"  height='12px'/>
                          <a href={project.site} target='_blank'>LIVE DEMO</a>
                        </div>
                        <div className='project-source'>
                          <Icon icon="icomoon-free:github" height='12px'/>
                          <a href={project.source} target='_blank'>SOURCE CODE</a>
                        </div>
                    </div>
                </motion.div>
            ))}
        </Carousel>
        </div>
    </div>
    </>
  )
}

export default Projects