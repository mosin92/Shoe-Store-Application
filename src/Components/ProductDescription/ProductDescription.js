import React from 'react'
import './ProductDescription.css'
import {Link} from 'react-router-dom'

export const ProductDescription = () => {
    return (
        <>
           
        <div className="descp">
          
            <h1>New Collection Shoes NC-001</h1>
            <p>
                Responsive Boost midsole cushions your 
                foot and keeps the energy coming when you need it most .Run with it. This  Shoes are a little technical and a lot street smart. Their midsole plugs flash back to the '80s, but the knit upper,
                full-length cushioned midsole and EVA inserts are 100 percent fashion forward.
            </p>
            <Link to="/cart" className="detail-cart" >
                                    Add to cart
                                </Link>
            </div>
            </>
    )
}
