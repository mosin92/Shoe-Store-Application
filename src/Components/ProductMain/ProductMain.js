import React from 'react'
import { Footer } from '../Footer/Footer';
// import {GlobalContext} from '../GlobalContext/GlobalContext'
import { LatestCollection } from './LatestCollection/LatestCollection';
import './Product.css'
export const ProductMain = () => {
    // let data = useContext(GlobalContext);
    // console.log(data);
    return (
        <div className="main">
          
            <div className="line">
                <br />
               <p> Latest Collection </p>
               
            </div>
            <LatestCollection />
            <Footer/>
        </div>
    )
}
