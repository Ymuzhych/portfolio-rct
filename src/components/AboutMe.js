import React from 'react';
import author from '../me.jpg';
const AboutMe = () => {
  return (
    <div className='container py-5'>
        <div className='row'>
            <div className='col-lg-6 col-xm-12'>
              <div className='photo-wrap mb-5'>

                <img className='profile-img' src={author} alt='autor...'/>
              </div>
            </div>
            <div className='col-lg-6 col-xm-12'>
                <h1 className='about-heading' >About Me</h1>
                <p>Hello! I am Yuliia. I recently earned a certificate in full stack development from the University of Texas bootcamp.
I have been developing websites for over 6 months. I am Full-Stack Web Developer. Technologies I use is MERN (MongoDB, Express, ReactJs and NodeJs).
</p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
