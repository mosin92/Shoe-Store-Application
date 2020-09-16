import React from 'react'
import './LatestCollection.css'
import firstimg from  '../../../ProductImgs/Men shoes/ben-hershey-8QLj1i7Z2iA-unsplash.jpg'
import secondpic from '../../../ProductImgs/Men shoes/img2.JPG'
import pic3 from '../../../ProductImgs/Men shoes/img3.JPG'




export const LatestCollection = () => {

     
    return (
        <>
        <div className="collection">
            
             
            <div className="firstpic" >
               <img src={firstimg} width="100%"   alt="fist img" />
            </div>
            <div className="desc1" >
                <h3>Men Shoe's Collection</h3>
                <div className="text1">
                    <span>Give your feet the beauty treatment that only brand new shoes can give. Build your own path with every step. Shoes for every place you
                      need to go to Wear light on your feet, go strong in your life.</span>   
                </div>
              
            </div>
            </div>


            {/* second */}
            <div className="collection">
            
            <div className="secondpic" >
               <img src={secondpic} width="100%"   alt="fist img" />
            </div>
            
            <div className="desc2" >
                <h3>Men Shoe's Collection</h3>
                <div className="text2">
                    <span>Give your feet the beauty treatment that only brand new shoes can give. Build your own path with every step. Shoes for every place you
                      need to go to Wear light on your feet, go strong in your life.</span>   
                </div>
                
            </div>
            </div>


            {/* End */}

            <div className="collection">
            
             
            <div className="firstpic" >
               <img src={pic3} width="100%"   alt="fist img" />
            </div>
            <div className="desc1" >
                <h3>Men Shoe's Collection</h3>
                <div className="text1">
                    <span>Give your feet the beauty treatment that only brand new shoes can give. Build your own path with every step. Shoes for every place you
                      need to go to Wear light on your feet, go strong in your life.</span>   
                </div>
              
            </div>
            </div>

            </>
    )
}
