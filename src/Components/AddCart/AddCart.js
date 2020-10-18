import React,{useContext} from 'react'
import { Sectionheader } from '../Sectionheader/Sectionheader'
import { GlobalContext } from '../GlobalContext/GlobalContext'
import  {Link} from 'react-router-dom'
import './Addcart.css'
export const AddCart = () => {
    let {cart,deletedata} = useContext(GlobalContext);
    console.log(cart);
    
    return (
        <div className="addcart">
          
            <Sectionheader/>
            <br />
            {
                cart.map(item => item.map(res=>(
                 
                        <div className="details" key={res.id}>
                            <img src={res.image} alt=""/>
                            <div className="box">
                            <div className="row">
                                <span><button onClick={()=>deletedata(res.id)} id="btn-cart">X</button></span>
                                    <h2>{res.title}</h2>
                                    <span>${res.price}</span>
                                </div>
                               
                                <p>{res.Description}</p>
                                
                                <Link to="/cart" className="cart" >
                                Buy it !
                                </Link>
                            
                            </div>
                        </div>
                )
                ))
                   
            }
              <div className="total">
                        <Link to="/">Payment</Link>
                        <h3>Total: $100</h3>
                    </div>
            
           </div>
    )
}
