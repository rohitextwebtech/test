import React, { useState } from "react";
import "./Table.css";
import './Hours.css'

import { useContext } from "react";
import { Datacontext } from "./Contextapi";

const Hours = () => {
  const { data } = useContext<any>(Datacontext);
  // const[days,hours]=useState(true);

  console.log(data.days[0].hours);

  return (
    <>
      
        <table style={{ width: "90%",margin:'1em auto',overflow:'scroll',height: "auto", border: "1" }}>
          <thead>
            <th>datetime</th>
            <th>temp</th>
            <th>feelslike</th>
            <th>humidity</th>
            <th>dew</th>
            <th>precip</th>
            <th>precipprob</th>
            <th>snow</th>
            <th>snowdepth</th>
            <th>precitype</th>
            <th>windgust</th>
            <th>windspeed</th>
            <th>winddir</th>
            <th>pressure</th>
            <th>visibility</th>
            <th>cloudcover</th>
            <th>solarradiation</th>
            <th>solarenergy</th>
            <th>uvindex</th>
            <th>severerisk</th>
            <th>conditions</th>
            <th>description</th>
            <th>icon</th>
            <th>stations</th>
            <th>source</th>
            <th>name</th>
          </thead>
          <hr style={{ width: "2500%" }}></hr>
          {data.days[0].hours.map((item: any, id: number) => {
            return (
              <tr
                key={id}
                style={{
                  width: "95%",
                  margin: "3em auto",
                  overflow: "scroll",
                  border: "1px solid gray",
                }}
              >
                <th>{item.datetime}</th>
                <th>{item.temp}</th>
                <th>{item.feelslike}</th>
                <th>{item.humidity}</th>
                <th>{item.dew}</th>
                <th>{item.precip}</th>
                <th>{item.precipprob}</th>
                <th>{item.snow}</th>
                
                <th>{item.snowdepth}</th>
                <th>{item.preciptype}</th>
                <th>{item.windgust}</th>
                <th>{item.windspeed}</th>
                <th>{item.winddir}</th>
                <th>{item.pressure}</th>
          
                <th>{item.visibility}</th>
                <th>{item.cloudcover}</th>
                <th>{item.solarradiation}</th>
                <th>{item.solarenergy}</th>
                <th>{item.uvindex}</th>
                <th>{item.severerisk}</th>
        
                <th>{item.conditions}</th>
               
                <th>{item.icon}</th>
                <th>{item.stations}</th>
                <th>{item.source}</th>
                <th>{data.address}</th>
              </tr>
            );
          })}
        </table>
      
    </>
  );
};

export default Hours;
