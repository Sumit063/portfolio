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
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 7
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
          removeArrowOnDeviceType='{["tablet", "mobile", "desktop", "superLargeDesktop"]}'
          itemClass="carousel-item-padding-40-px">
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