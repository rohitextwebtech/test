import React,{ useState,useContext} from 'react';
import './Home.css';
import { useNavigate } from 'react-router-dom';
import Contextapi, { Datacontext } from './Contextapi';


const Home = () => {

 const[city,setcity]=useState('')
 const {setdata} = useContext<any>(Datacontext);


 let navigate=useNavigate()
 let getdata = async ()=>{
    try{
      // N6NQ9ZS8MCA73GRDFT9Y8QHRL
        let response= await fetch(`https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${city}?unitGroup=metric&key=N6NQ9ZS8MCA73GRDFT9Y8QHRL&contentType=json`)
      let result=await response.json()
      setdata(result)
      console.log(result)
    
      if (response.status === 200) {
          navigate("/Table");
        } 
   

    }catch(error){
        console.log(error)
    }
 }
 


// console.log(data)


  return (
  <>
  <div style={{width:'90%',boxSizing:'border-box',margin: '5em'}}>
{/* <div style={{display:'flex',justifyContent:'flex-end'}}>
<button>Logout</button>
<button>Account</button>
</div> */}
   <div style={{display:'flex',justifyContent:'space-around',flexWrap:'wrap'}}>
    <div>
    <h1>Easy Global Weather API</h1>
    <h2>Single history & forecast Weather API</h2>
    </div>
    <div>
<img src=' https://www.visualcrossing.com/images/weather-api/hero-image.webp' alt='firsimage'/>

    </div>
  </div> 
 

 <div >

    
    <h2>Build your first Weather API query</h2><br></br>
    <input type='string '  placeholder='Enter a location' onChange={(e)=>setcity(e.target.value)} style={{outline:'none',border:' 0.1em solid #efecf3',
    borderRight:'0',padding:'2em',width:'50%',zIndex:'1',marginTop:'-8em',borderRadius:'1.8em',backgroundColor:'#fff'}}
    />
    <button onClick={()=>getdata()} style={{backgroundColor:'#00628b',outline:'none',padding:'0.5em 1em',borderRadius:'1em',
    zIndex:'2',marginLeft:'-5em',fontSize:'20px',color:'white'
    }}
    
    >Create Query</button>
 
    
    </div>
   
  
  
    </div>
  </>
  )
}

export default Home