import React from 'react'
import { BackgroundImg } from '../BackgroundImg/BackgroundImg';
import { Footer } from '../Footer/Footer';
import { Sectionheader } from '../Sectionheader/Sectionheader';

import { LatestCollection } from './LatestCollection/LatestCollection';
import './Product.css'
export const ProductMain = () => {
  
    return (
        <div className="main">
           <Sectionheader/>
            <BackgroundImg/>
            <div className="line">
                <br />
               <p> Latest Collection </p>
               
            </div>
            <LatestCollection />
            <Footer/>
        </div>
    )
}
