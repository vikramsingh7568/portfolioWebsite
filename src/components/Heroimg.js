import "./HeroimgStyles.css"
import IntroImg from '../assets/introimg.jpg'
import React from 'react'
import {Link} from "react-router-dom";
const Heroimg = () => {
  return ( 
   <div className="hero">
      <div className="mask">
        <img className="into-img"
        src={IntroImg} alt="IntroImg"/>
         </div>
         <div className="content">
          <p>Hi , I'M FREELANCER.</p>
          <h1> Full Stack Developer.</h1>
          <div>
            <Link To="/project"
             className="btn">Projects
             </Link>
             <Link To="/contact"
             className="btn-light">contact
             </Link>
          </div>
         </div>
    </div>
  )
}

export default Heroimg
