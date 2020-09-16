import React from 'react'

import {Routes,Route} from 'react-router-dom'
import {ProductMain } from './ProductMain/ProductMain'

import { SectionheaderMain } from './Sectionheader/SectionheaderMain'


export const MainPage = () => {
    return (
        <div>
            <SectionheaderMain/>
            <Routes>
             
                <Route path="/" element={<ProductMain/>} />
            </Routes>
        </div>
    )
}
