import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import './Sectionheader.css'
import Aos from 'aos'
import 'aos/dist/aos.css';

// import { BackgroundImg } from '../BackgroundImg/BackgroundImg';


export const Sectionheader = () => {


    useEffect(() => {
     
        Aos.init({
            duration:2000
        });
    },[])
    return (

        <>
        <div className="header" data-aos="fade-down">
                <div className="bar">
                <i className="fas fa-bars"></i>
          </div>
        
            <Link to="/"> 
                <img src="https://fontmeme.com/permalink/200913/9e106326384c5bd8848f09c2253fe4a9.png" height="45px" width="230px" alt="logo"  />
                </Link>
            <ul className="list">
                <li>
                <Link to="/">home</Link> </li> 
                 
                <li><Link to="/">Browse Product</Link> </li> 
                <li><Link to="/">About us</Link> </li> 
                    <li><Link to="/">Contact us</Link> </li> 
                       
             </ul>
             <div>
                <div className="cart" >
                <Link to="/">
                    <i id="cart" className="fas fa-shopping-cart"></i>
                                </Link>
            </div>
            
            </div>
           
            </div>
          
            </>
    )
}
