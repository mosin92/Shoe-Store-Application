import React from 'react'

import {Routes,Route} from 'react-router-dom'
import { AddCart } from './AddCart/AddCart'
import { BrowseProduct } from './BrowseProduct/BrowseProduct'
import { ProductDetails } from './ProductDetails/ProductDetails'
import {ProductMain } from './ProductMain/ProductMain'


export const MainPage = () => {
    return (
        <div>
            
            <Routes>
             
                <Route path="/" element={<ProductMain />} />
                <Route path="/browseproduct" element={<BrowseProduct />} />
                <Route path="/browseproduct/:id" element={<ProductDetails />} />
                <Route path="/addcart"  element={<AddCart/>} />
               
            </Routes>
        </div>
    )
}
