import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
 import './slider.css'
 //For image Data
import id1img1 from '../../ProductImgs/MainPageProduct/Img1/front.jpg'
import id1img2 from '../../ProductImgs/MainPageProduct/Img1/2.jpg'
import id1img3 from '../../ProductImgs/MainPageProduct/Img1/3.jpg'
import id1img4 from '../../ProductImgs/MainPageProduct/Img1/4.jpg'
import id1img5 from '../../ProductImgs/MainPageProduct/Img1/5.jpg'

//For img 2 Data
import id2img1 from '../../ProductImgs/MainPageProduct/Img2/front2.jpg'
import id2img2 from '../../ProductImgs/MainPageProduct/Img2/1.jpg'
import id2img3 from '../../ProductImgs/MainPageProduct/Img2/2.jpg'
import id2img4 from '../../ProductImgs/MainPageProduct/Img2/3.jpg'
import id2img5 from '../../ProductImgs/MainPageProduct/Img2/4.jpg'

//For img 3 Data
import id3img1 from '../../ProductImgs/MainPageProduct/Img3/front3.jpg'
import id3img2 from '../../ProductImgs/MainPageProduct/Img3/1.jpg'
import id3img3 from '../../ProductImgs/MainPageProduct/Img3/2.jpg'
import id3img4 from '../../ProductImgs/MainPageProduct/Img3/3.jpg'
import id3img5 from '../../ProductImgs/MainPageProduct/Img3/4.jpg'

//For img 4 Data
import id4img1 from '../../ProductImgs/MainPageProduct/Img4/front4.jpg'
import id4img2 from '../../ProductImgs/MainPageProduct/Img4/1.jpg'
import id4img3 from '../../ProductImgs/MainPageProduct/Img4/3.jpg'
import id4img4 from '../../ProductImgs/MainPageProduct/Img4/4.jpg'
import id4img5 from '../../ProductImgs/MainPageProduct/Img4/5.jpg'

//For img 5 Data
import id5img1 from '../../ProductImgs/MainPageProduct/Img5/front5.jpg'
import id5img2 from '../../ProductImgs/MainPageProduct/Img5/1.jpg'
import id5img3 from '../../ProductImgs/MainPageProduct/Img5/2.jpg'
import id5img4 from '../../ProductImgs/MainPageProduct/Img5/3.jpg'
import id5img5 from '../../ProductImgs/MainPageProduct/Img5/4.jpg'

//For img 6 Data
import id6img1 from '../../ProductImgs/MainPageProduct/Img6/front6.jpg'
import id6img2 from '../../ProductImgs/MainPageProduct/Img6/1.jpg'
import id6img3 from '../../ProductImgs/MainPageProduct/Img6/3.jpg'
import id6img4 from '../../ProductImgs/MainPageProduct/Img6/4.jpg'
import id6img5 from '../../ProductImgs/MainPageProduct/Img6/5.jpg'

export const Slider = ( {id}) => {
 
    
    const imagedata = [{
        id: 1 ,
        image: [id1img1, id1img2, id1img3, id1img4,id1img5]
    }, 
        {
            id: 2,
            image: [id2img1, id2img2, id2img3, id2img4, id2img5]
        },

        {
            id: 3,
            image: [id3img1, id3img2, id3img3, id3img4, id3img5]
        },

        {
            id: 4,
            image: [id4img1, id4img2, id4img3, id4img4, id4img5]
        } ,
        {
            id: 5,
            image: [id5img1, id5img2, id5img3, id5img4, id5img5]
        },

        { id:6 ,
            image: [id6img1, id6img2, id6img3, id6img4, id6img5]
        } ,
    ]

    let getdata = imagedata.filter(item => item.id === parseInt(id, 10));
    // console.log(getdata);
    return (
        <div className="slider" >
           
           <Carousel>
                {
                    getdata.map(item => (
                        
                            item.image.map(res=>(
                                <div className="slider-images">
                                    <img src={res} alt="product" />
                             </div>
                            ))
                        
                    ))
                }
            </Carousel>
             
        </div>
    )
}
