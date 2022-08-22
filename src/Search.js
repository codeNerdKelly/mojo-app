import React from "react";
import './Search.css';

export default function Search(){

    return (
        <div className = "Search">
            {/* search bar and button */}
            <div className = "row">
                <div className = "col-9">
                    <input 
                    type = "search"
                    placeholder = "enter a city..."
                    className = "form-control"
                    />
                </div>
                <div className = "col-3">
                    <input
                    type = "submit"
                    value = "search"
                    className = "btn btn-primary"
                    />
                </div>
            </div>

{/* CurrentCity, CurrentTime, CurrentConditions*/}
            <div className = "row">
                <div className = "col-6">
                     <h1 className = "CurrentCity">Boston</h1>
                    <ul>
                        <li className = "CurrentTime">Tuesday, 16:28</li>
                        <li className = "CurrentConditions">Partly Cloudy</li>
                    </ul>
                </div>
            </div>

    
            <div className = "row">
                 {/*CurrentTemp */}
                <div className = "col-6">
                    <ul>
                        <li>
                            <img src = "https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png" className = "currentIcon"></img>
                        </li>
                    </ul>
                </div>

                {/* Precipitation, Humidity, Wind*/}
                <div className = "col-6"></div>
            </div>
        </div>
    )
}