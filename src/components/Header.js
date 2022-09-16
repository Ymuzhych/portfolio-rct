import React from 'react';
import Typed from "react-typed";

const Header = () => {
  return (
    <div className='header-wraper'>
        <div className='main-info'>
           <h1>Front-End Web Development</h1> 
           <Typed className='typed-text'
           strings={['HTML, CSS, Javascript, React.js, Node.js']}
           typeSpeed={40}
           backSpeed={60}
           loop
           />
           <a href='#'className='btn-main-offer'>Contact me</a>
        </div>
    </div>
  )
}

export default Header
