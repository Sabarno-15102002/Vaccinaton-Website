import React from "react";
import ChartCard from "./ChartCard";
// import ChartBlock1 from "./ChartBlock1";
// import ChartBlock2 from "./ChartBlock2";

export default function Chart()
{
    
    return <section id="chart">
    <div className="chart-text">
    <h6>Our service</h6>
    <div className="green"></div>
    <h1>Our Services for Vaccination</h1>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.</p>
    </div>
        <div className="row">
        <ChartCard heading="Infant" about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptas laboriosam dicta expedita quos eum veniam, accusantium repudiandae possimus"/>
        <ChartCard heading="Toodlers" about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptas laboriosam dicta expedita quos eum veniam, accusantium repudiandae possimus"/>
        <ChartCard heading="School going kids" about="Lorem, ipsum dolor sit amet consectetur adipisicing elit. At voluptas laboriosam dicta expedita quos eum veniam, accusantium repudiandae possimus"/>
    </div>
    </section>
}