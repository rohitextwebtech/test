import React, { useState } from 'react';
import './Table.css'
import  { useContext } from "react";
import  { Datacontext } from './Contextapi';
import Hours from './Hours';
import Info from './Info';
import Hoc from './Hoc';





const Table = () => {
    const {data} = useContext<any>(Datacontext);
    const [component,setComponent] = useState(true)
    const [infodetail,setinfodetail] = useState(true)

    // const[days,hours]=useState(true);

// console.log(data)



  return (
 <>




 <div  style={{width:'95%',margin:'3em auto'}}>
    <div><h1 >Weather Query Builder</h1></div>
 <div style={{backgroundColor:'#1F73B7',height:'12em',width:'90%',margin:'3em auto',color:'white',
 display:'flex',flexDirection:'row',flexWrap:'wrap',justifyContent:'space-between',padding:'1em 3em'
}}>
    <h3>{data.address}</h3>
    <h3>Next 15 days 10/06/2022 10/20/2022</h3>
    <h3>Metric (C,KM)</h3>



 </div>
 <div style={{display:'flex',flexDirection:'row',justifyContent:'flex-start',margin:'1em 2em'}}>
<button style={{margin:'1em',padding:'1em 2em'}} onClick={()=>setComponent(true)} >Daily</button>
<button style={{margin:'1em',padding:'1em 2em'}} onClick={()=>setComponent(false)} >Hours</button>

 </div>

    {
        component ?
        <div style={{overflowX:'scroll'}}>
        <table  style={{width:'90%',height:'100px',border:"1"}}>
        <thead>
               <th>
               datetime
               </th>
               <th>
               tempmax
               </th>
               <th>tempmin</th>
               <th>temp</th>
               <th>feelslikemax</th>
               <th>feelslikemin</th>
               <th>feelslike</th>
               <th>dew</th>
               <th>humidity</th>
               <th>precip</th>
               <th>precipprob</th>
               <th>precipcover</th>
               <th>preciptype</th>
               <th>snow</th>
               <th>snowdepth</th>
               <th>windgust</th>
               <th>windspeed</th>
               <th>winddir</th>
               <th>pressure</th>
               <th>cloudcover</th>
               <th>visibility</th>
               <th>solarradiation</th>
               <th>solarenergy</th>
               <th>uvindex</th>
               <th>severerisk</th>
               <th>sunrise</th>
               <th>sunset</th>
               <th>moonphase</th>
               <th>conditions</th>
               {/* <th>description</th> */}
               <th>icon</th>
               <th>stations</th>
               <th>source</th>
               <th>name</th>
           </thead>
           <hr style={{width:'3200%'}}></hr>
           {data.days.map((item:any,id:number)=>{
               return(
                   
              <tr key={id} style={{width:'95%',margin:'3em auto',overflow:'scroll',border:'1px solid gray'}}>
           
           <th>{item.datetime}</th>
           <th>{item.tempmax}</th>
           <th>{item.tempmin}</th>
           <th>{item.temp}</th>
           <th>{item.feelslikemax}</th>
           <th>{item.feelslikemin}</th>
           <th>{item.feelslike}</th>
           <th>{item.dew}</th>
           <th>{item.humidity}</th>
           <th>{item.precip}</th>
           <th>{item.precipprob}</th>
           <th>{item.precipcover}</th>
            <th>{item.preciptype}</th> 
           
           <th>{item.snow}</th>
           <th>{item.snowdepth}</th>
           <th>{item.windgust}</th>
           <th>{item.windspeed}</th>
           <th>{item.winddir}</th>
           <th>{item.pressure}</th>
           <th>{item.cloudcover}</th>
           <th>{item.visibility}</th>
           <th>{item.solarradiation}</th>
           <th>{item.solarenergy}</th>
           <th>{item.uvindex}</th>
           <th>{item.severerisk}</th>
           <th>{item.sunrise}</th>
           <th>{item.sunset}</th>
           <th>{item.moonphase}</th>
           <th>{item.conditions}</th>
           {/* <th>{item.description}</th> */}
           <th>{item.icon}</th>
           <th>{item.stations}</th> 
          
           <th>{item.source}</th>
           <th>{data.address}</th>
          
           
           </tr>
               )
           
       
       })
       }
       
       
       
        </table>
        </div>
        :
        <Hours/>
        
    }


<button onClick={()=>setinfodetail(true)} style={{margin:'1em',padding:'1em 2em'}}>Info</button>
<button onClick={()=>setinfodetail(false)} style={{margin:'1em',padding:'1em 2em'}}>Stations</button>
    <div style={{marginTop:'5em'}}>
    {infodetail?
    <Info/>:<Hoc />

}

    </div>
    


 </div>
 </>
  )
}


export default Table