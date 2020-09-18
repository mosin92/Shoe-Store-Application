import React,{createContext,useState} from 'react'
import pic1 from '../../ProductImgs/MainPageProduct/Img1/front.jpg'
import pic2 from '../../ProductImgs/MainPageProduct/Img2/front2.jpg'
import pic3 from '../../ProductImgs/MainPageProduct/Img3/front3.jpg'
import pic4 from '../../ProductImgs/MainPageProduct/Img4/front4.jpg'
import pic5 from '../../ProductImgs/MainPageProduct/Img5/front5.jpg'
import pic6 from '../../ProductImgs/MainPageProduct/Img6/front6.jpg'
export const GlobalContext = createContext();

export const GlobalDataProvider = ({children})=>{
    
    let [data, setdata] = useState([
        {
            id: 1,
            title: "New Collection shoes 1",
            image:pic1,
            price: 350,
            Description: "New Collection has been your companion in happiness, both big and small "+
             " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
        ,
        {
            id: 2,
            title: "New Collection shoes 2",
            image:pic2,
            price: 300,
            Description: "New Collection has been your companion in happiness, both big and small "+
            " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
        ,
        {
            id: 3,
            title: "New Collection shoes 3",
            image:pic3,
            price: 250
            ,
            Description: "New Collection has been your companion in happiness, both big and small "+
            " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
        ,
        {
            id: 4,
            title: "New Collection shoes 4",
            image:pic4,
            price: 150,
            Description: "New Collection has been your companion in happiness, both big and small "+
            " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
        ,
        {
            id: 5,
            title: "New Collection shoes 5",
            image:pic5,
            price: 100
            ,
            Description: "New Collection has been your companion in happiness, both big and small "+
            " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
        ,
        {
            id: 6,
            title: "New Collection shoes 6",
            image:pic6,
            price: 100,
            Description: "New Collection has been your companion in happiness, both big and small "+
            " for over 50 years.Our roots are firmly grounded in Pakistan and with its people"
        }
    ]);

    return (
        <GlobalContext.Provider value={{
            data
        }}>
            
            {children}
       </GlobalContext.Provider>
    )

}