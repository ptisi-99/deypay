
import React from "react";
import "./anima.css";
import mycloud from "./mycloudicon.png";

export const Frame2inner = ({data}) => {

    function content(date){
        const contnt = date.days?.map((day)=> {

            if (day.datetime === "2023-09-22"){
                return (
                <>
                    <div className="divf">Temperature: {day.temp} </div>
                    <div className="divf">Wind: {day.winddir}</div>
                    <div className="divf">Day Type: {day.icon}</div>
                </>
                )
            }
            

            return "Date not required"
             

        })
        return contnt
    }
    return (
        <div className="inner">
            <div className="frame2contentinner">
                <div className="text-wrapperf">{data.resolvedAddress}</div>
                {content(data)}
            </div>
            <img className="vector" alt="Vector" src={mycloud} />
        </div>
    );
};

export const Forminputfield = (props)=> {
    
    return (
        <div className="diva">
            <label>The label</label>
            <input placeholder={props.placeholder} ref={props.reffer}  />
        </div>
    )
}