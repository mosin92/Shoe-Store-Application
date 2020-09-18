import React from 'react'

import {Routes,Route} from 'react-router-dom'
import { BrowseProduct } from './BrowseProduct/BrowseProduct'
import { ProductDetails } from './ProductDetails/ProductDetails'
import {ProductMain } from './ProductMain/ProductMain'


import {BreifProduct} from './BreifProduct/BreifProduct'

export const MainPage = () => {
    return (
        <div>
            
            <Routes>
             
                <Route path="/" element={<ProductMain />} />
                <Route path="browseproduct" element={<BrowseProduct />} />
                <Route path="/browseproduct/:id" element={<ProductDetails />} />
                <Route path="breif" element={<BreifProduct/>} />
            </Routes>
        </div>
    )
}
