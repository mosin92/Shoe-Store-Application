import React from 'react'
import './Background.css'
import shoe from '../../Imgs/shoe.png'
export const BackgroundImg = () => {
    return (
        <div className="background">
          
                <div className="main-center">

                <div className="left">
                    <div className="inside-left">
                        <h1> New Collection </h1> 
                        
                        <p>New Collection made a promise to their consumers to maintain the highest
                        possible quality they can. They listened to athletes and designed 
                        their shoes to meet endurance,
                             durability and performance standards specifically</p>
                        
                        <div className="second-container">
                                      <div className="sale">
                                       <h2> 50% off </h2>
                                       </div>
                                       <div className="btnclass">

                                          <button class="btn">Visit Website</button>
 
                                   </div>
                            </div>
                        
                    </div>
                           
                            </div>
                        <div className="right">
                            <img src={shoe} height="400px" width="600px"  alt="shoe"/>
                        </div>
                
                
                </div>
            
            
        </div>
    )
}
