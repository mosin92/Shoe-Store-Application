import React, { useContext } from 'react'
import './BrowseProduct.css'
import {GlobalContext} from '../GlobalContext/GlobalContext'
import { Link } from 'react-router-dom';
import { Sectionheader } from '../Sectionheader/Sectionheader';
export const BrowseProduct = () => {

    const {data,addcart} = useContext(GlobalContext);
    
    return (
        <>
            <Sectionheader />
            <br/>
        <div className="browse">
            {/* <Sectionheader/> */}
            <h1>Trending Collection</h1>
            <div className="browse-product">
                {
                    data.map(datas => (
                        
                        <div className="card" key={datas.id}>
                            <Link to={`/browseproduct/${datas.id}`} >
                             <img src={datas.image}    alt="fistimage missed" />
                            </Link>
                            <div className="content">
                                <h3>
                                    <Link to={`/browseproduct/${datas.id}`} >
                                       {datas.title}
                                        </Link>
                                </h3>
                                <span>
                                   ${datas.price}
                                </span>
                                <button onClick={()=>addcart(datas.id)} >Add to Card</button>
                                {/* <button>View Details</button> */}
                                </div>
                        </div>
                        
                    ))
                }

            </div>
            
            </div>
            </>
    )
}
