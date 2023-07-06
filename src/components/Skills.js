import React from 'react'
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import {skills} from '../api/skills';
import '../styles/skills.css';

const Skills = () => {
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
      <h3>MY SKILLS SO FAR</h3>
      <h4>What I work on</h4>
        <div className='cards-container'>
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
        </div>
    </div>
    </>
  )
}

export default Skills