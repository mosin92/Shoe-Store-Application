import React,{createContext,useState} from 'react'

export const GlobalContext = createContext();

export const GlobalDataProvider = ({children})=>{
    
    let [data, setdata] = useState([
        {
            id: 1,
            title: "New Collection shoes 1",
            price:200
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