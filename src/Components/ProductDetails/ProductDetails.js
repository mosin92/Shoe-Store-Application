import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { Slider } from '../Slider/Slider'
import { ProductDescription } from '../ProductDescription/ProductDescription'
import { Sectionheader } from '../Sectionheader/Sectionheader'
export const ProductDetails = () => {
    let { id } = useParams();
    
    return (
        <div>
          
            <Sectionheader/>
            <br />
            <div className="main-details">
                <div className="left-div">
                   <Slider id={id}/> 
                </div> 
                <div className="right-div">
                  <p><ProductDescription/></p>

                </div>
           </div>
        </div>
    )
}
