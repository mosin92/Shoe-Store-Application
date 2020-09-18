import React from 'react'
import { useParams } from 'react-router-dom'
import './ProductDetails.css'
import { Slider } from '../Slider/Slider'
import { ProductDescription } from '../ProductDescription/ProductDescription'
export const ProductDetails = () => {
    let { id } = useParams();
    
    return (
        <div>

            Detalis {id}
            <br />
            <div className="main-details">
                <div className="left-div">
                    <p> <Slider id={id}/> </p>
                </div> 
                <div className="right-div">
                  <p><ProductDescription/></p>

                </div>
           </div>
        </div>
    )
}
