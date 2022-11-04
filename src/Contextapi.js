
    import React, { useState } from 'react'
    export const Datacontext = React.createContext([]);
    
    
    const Contextapi = ({children}) => {
      const[data,setdata]=useState({})
    console.log(data)
    
      
        return (
          <>
          <Datacontext.Provider value={{data,setdata}}>
           {children}
          </Datacontext.Provider>
          
          </>
        )
      }
    
    export default Contextapi




   
     