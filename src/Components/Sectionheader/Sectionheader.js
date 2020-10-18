import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import './Sectionheader.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import {GlobalContext} from '../GlobalContext/GlobalContext'
// import { BackgroundImg } from '../BackgroundImg/BackgroundImg';
export const Sectionheader = () => {

    let { cart } = useContext(GlobalContext);
    const [toggle, settoggle] = useState(false);
      
    console.log(cart);
    
    useEffect(() => {
     
        Aos.init({
            duration:2000
        });
    }, [])
    function menutoggle() {
        settoggle(!toggle);
        console.log(toggle);
    }
    return (

        <>
        <div className="header" data-aos="fade-down">
                <div className="bar" onClick={menutoggle}>
                <i className="fas fa-bars"></i>
          </div>
        
            <Link to="/"> 
                <img src="https://fontmeme.com/permalink/200913/9e106326384c5bd8848f09c2253fe4a9.png" height="45px" width="230px" alt="logo"  />
                </Link>
            <ul className={toggle ? "toggle" : ""}>
                <li>
                <Link to="/">home</Link> </li> 
                 
                <li><Link to="/browseproduct">Browse Product</Link> </li> 
                <li><Link to="/">About us</Link> </li> 
                    <li><Link to="/">Contact us</Link> </li> 
                       
             </ul>
                <div>
                    <div className="close">
                     <button onClick={menutoggle} >x</button>
                    </div>
                    <div className="cart" >
                        <span>{cart.length}</span>
                                <Link to="/addcart">
                                    <i id="cart" className="fas fa-shopping-cart"></i>
                                </Link>
            </div>
            
            </div>
           
            </div>
          
            </>
    )
}
