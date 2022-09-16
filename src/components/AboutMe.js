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
                <p>Hello! I am Yuliia. Front-end web developer with ability to learn and collaborate in rapidly changing environments and compositions. Recently earned a certificate in full stack development from the University Coding, with newly developed skills in JavaScript, CSS, React.js, and responsive web
design. Eager to tackle web development/design challenges to achieve lasting impacts on user experience.

</p>
            </div>
        </div>
      
    </div>
  )
}

export default AboutMe
