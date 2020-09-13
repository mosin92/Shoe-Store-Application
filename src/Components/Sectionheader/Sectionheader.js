import React from 'react'
import { Link } from 'react-router-dom'
import './Sectionheader.css'
import logo from '../../Imgs/nike 2.png';
import { BackgroundImg } from '../BackgroundImg/BackgroundImg';

export const Sectionheader = () => {
    return (

        <>
        <div className="header">
          
            <Link to="/"> 
                <img src={logo} height="45px" width="90px" alt="logo"  />
                </Link>
            <ul className="list">
                <li>
                <Link to="/">home</Link> </li> 
                <li><Link to="/">home</Link> </li> 
                <li><Link to="/">Product</Link> </li> 
                <li><Link to="/">About us</Link> </li> 
                <li><Link to="/">Contact us</Link> </li> 
             </ul>
            
            
            </div>
            <BackgroundImg />
            
            </>
    )
}
