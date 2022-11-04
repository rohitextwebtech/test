import React from 'react'

const Test = () => {


let rows=5;      

for (let i= rows-1; i>=0 ; i--)  
{  

for (let j=0; j<=i; j++)  
{  

document.write("*" + " ");  
}  
document.write("<br/>")
 


}  







  return (
    <div>Test</div>
  )
}

export default Test