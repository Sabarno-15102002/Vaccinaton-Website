import React from "react";
import "./Chart.css"
export default function ChartCard(props)
{
    return <div className="col-lg-4 col-md-6">
            <div className="chart-card slide-up">
                <h3>{props.heading}</h3>
                <p>{props.about}</p>
                <a href={"/"+props.heading}>Learn More</a>
            </div>
    </div>
}