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
          items: 2
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 2
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 2
        }
      };

  return (
    <>
    <div className='skills-section'>
        <div className='cards-container'>
        <Carousel responsive={responsive}>
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