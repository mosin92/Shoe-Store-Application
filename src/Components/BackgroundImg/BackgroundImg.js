import React, { useEffect } from 'react'
import './Background.css'
import Aos from 'aos'
import 'aos/dist/aos.css';
import shoe from '../../Imgs/shoe.png'

export const BackgroundImg = () => {

    useEffect(() => {
     
        Aos.init({
            duration:2000
        });
    },[])
    return (
        <div className="background">
          
                <div className="main-center">

                   <div className="left">
                         <div className="inside-left" data-aos="fade-right">
                             <h1> New Collections </h1> 
                        
                        <p>New Collections made a promise to their consumers to maintain the highest
                        possible quality they can. They listened to athletes and designed 
                        their shoes to meet endurance,
                             durability and performance standards specifically</p>
                        
                        <div className="second-container">
                                      <div className="sale">
                                       <h2>Sale 50% off </h2>
                                       </div>
                                       <div className="btnclass">

                                          <button class="btn">Visit Website</button>
 
                                   </div>
                            </div>
                        
                    </div>
                           
                            </div>
                        <div className="right" data-aos="fade-left">
                            <img src={shoe} height="400px" width="100%"  alt="shoe"/>
                        </div>
                
                
                </div>
            
            
        </div>
    )
}
