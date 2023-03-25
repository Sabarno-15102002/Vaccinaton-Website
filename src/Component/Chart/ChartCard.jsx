import React from "react";
import "./Chart.css"
function ChartCard(props) {
    const authenticated = localStorage.getItem('authenticated');
    return (<div className="col-lg-4 col-md-6">
        <div className="chart-card slide-up">
            <h3>{props.heading}</h3>
            <p>{props.about}</p>
            {authenticated !== "false" ? <a href={"/" + props.heading}>Learn More</a> : <a href="/login">Learn More</a>}
        </div>
    </div>);
}
export default ChartCard;