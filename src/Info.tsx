import React, { useState } from "react";
import "./Table.css";
import './Hours.css'

import { useContext } from "react";
import { Datacontext } from "./Contextapi";

const Info = () => {
  const { data } = useContext<any>(Datacontext);
  // const[days,hours]=useState(true);

  console.log(data);
 

  return (
    <>
      
        <table style={{ width: "90%", height: "auto", border: "1" }}>
          <thead>
            <th>QueryCost </th>	
            <th>latitude</th>
            <th>longitude</th>
            <th>resolvedAddress</th>
            <th>address</th>
            <th>timezone</th>
            <th>tzoffset</th>
            <th>description</th>
      
          </thead>
          <hr style={{ width: "2500%" }}></hr>
          <tr>
            <th>1</th>
            <th>{data.latitude}</th>
            <th>{data.longitude}l</th>
            <th>{data.resolvedAddress}</th>
            <th>{data.address}</th>
            <th>{data.timezone}</th>
            <th>{data.tzoffset}</th>
            <th>{data.description}</th>
          
          </tr>
        
        </table>
      
    </>
  );
};

export default Info;
