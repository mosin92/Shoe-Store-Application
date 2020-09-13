import React from 'react'

import {Routes,Route} from 'react-router-dom'
import {ProductMain } from './ProductMain/ProductMain'
import { Sectionheader } from './Sectionheader/Sectionheader'


export const MainPage = () => {
    return (
        <div>
            <Sectionheader/>
            <Routes>
             
                <Route path="/" element={<ProductMain/>} />
            </Routes>
        </div>
    )
}
