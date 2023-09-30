import React, { useState,useEffect } from "react";
import brandlogo from "./brandlogo.png";
import  Dashboard  from "./mydashboard";
import './App.css';

function App() {

  const [mainpage, togglemainpage] = useState(true)
  const [data, resetdata] = useState({})

  useEffect(()=>{
      fetch("https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/global/2023-09-22/2023-09-25?unitGroup=metric&key=ENVYXS52ADF9VAFTBGLAM5YF3&contentType=json")
      .then((respond)=> {return respond.json()}).then((data)=> { 
          console.log(data)
          resetdata(data)
      
      }).catch("Failed data fetch")

  },[])

  return (
      
          mainpage ?
          (<div className="desktop">
              <div className="brandlogo-wrapper" >
                  <img id="brandlogo" src={brandlogo} alt="this is brandlogo" width={200}/>
                  
                  <div className="statement" onClick={()=> {togglemainpage(!mainpage)}}>
                      <h3>Get Started...</h3>
                      <p>let"s Levitate together!</p>
                  </div>
              
              </div>
          </div> ) : (
              
                  <Dashboard data={data} />
                  
             
              )
      
  );   
}

export default App;

