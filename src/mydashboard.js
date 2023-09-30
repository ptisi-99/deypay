

import React, { useRef, useState } from "react";
import {   Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import "./anima.css";
import { Frame2inner,  Forminputfield  } from "./mycomponent";
import  Donothing  from "./Donothing";





const Dashboard = ({data}) => {

    const therefered = useRef()
    const username = useRef()
    const email = useRef()
    const password = useRef()
    const orgins = useRef()
    

    const [form, toggleform] = useState(true)

    //data.address?.charAt(0).toUpperCase() + data.address?.slice(1)

    function Handlesubmit(e){
        e.preventDefault();
        const values = {therefered: therefered.current.value, 
                        username: username.current.value,
                        email: email.current.value,
                        password: password.current.value,
                        state_of_origin: orgins.current.value
                    }
        
        localStorage.setItem("FormData", JSON.stringify(values))
        console.log(localStorage.getItem("uniuyo_student")?.name)
        console.log(values)
    }



    return (
        
            form ? 
            (<div className="dashboard">
            <div  className="landingtag" >
                <Link to="/pagecontainingdonothing" > landing page </Link>
            </div>

            <Routes>
                <Route path="/pagecontainingdonothing" element={ <Donothing /> } />
            </Routes>



            <div className="div">
                <div className="frame">
                    <div className="text-wrapper">weather Dashboard</div>
                </div>
                <div className="text-wrapper-2">Enter a City Name...</div>
                <div className="overlap">
                    <input  placeholder="E.g New York, London, Tokyo" />
                </div>
                <p className="p">E.g New York, London, Tokyo</p>
                <div className="div-wrapper">
                    <div className="text-wrapper-3">{data.timezone}</div>
                </div>
                <div className="overlap-group">
                    <div className="text-wrapper-4" onClick={()=> {toggleform(!form)}} >Use Current Location</div>
                </div>
                <div className="text-wrapper-5">4-Day Forecast</div>
                <div className="frame-2" >
                    <Frame2inner data={data} />
                </div>
                <img className="line" alt="Line" src="line-1.svg" />
                <img className="img" alt="Line" src="line-2.svg" />
                <div className="text-wrapper-6">or</div>
                <div className="frame-3" />
                <div className="frame-4" />
                <div className="frame-5" />
                <div className="frame-6" />
            </div>
        </div>)
            :
            (<div className="myformpage">
                <h1 className="customH1">The form to be filled</h1>
                <div>
                    <form onSubmit={(event)=> {Handlesubmit(event)}} className="form">
                        <Forminputfield placeholder="Username" reffer={username} />
                        <Forminputfield placeholder="Email" reffer={email} />
                        <Forminputfield placeholder="Password" reffer={password} />
                        <Forminputfield placeholder="Full name" reffer={orgins} />
                        <Forminputfield placeholder="State of Origin" reffer={therefered} />
                        <button>Submit Form</button>
                    </form>
                </div>
                <button className="toggler" onClick={()=> {toggleform(!form)}}>Toggle form</button>
            </div>)
        
    );
};


export default Dashboard