import React from "react";
import ChartCard from "./ChartCard";
// import ChartBlock1 from "./ChartBlock1";
// import ChartBlock2 from "./ChartBlock2";

export default function Chart() {

    return <section id="chart">
        <div className="chart-text">
            <h6>Our service</h6>
            <div className="green"></div>
            <h1>Our Services for Vaccination</h1>
            <p>You can protect your child from diseases, thanks to vaccines!
                Know more about the diseases and ways to prevent them.</p>
        </div>
        <div className="row">
            <ChartCard heading={localStorage.getItem("authenticated") ? "Infant" : "login"} about="Infants require vaccinations to protect them from various diseases such as measles, mumps, and rubella. Vaccination schedules vary, but they typically begin at two months old and continue throughout childhood." />
            <ChartCard heading={localStorage.getItem("authenticated") ? "Toodlers" : "login"} about="Vaccinating toddlers is essential for protecting them against several life-threatening diseases. It helps build immunity and prevents outbreaks, ensuring a healthier future for them." />
            <ChartCard heading={localStorage.getItem("authenticated") ? "School going kids" : "login"} about="Vaccinating school-going kids helps protect them against infectious diseases like measles, polio, and COVID-19. It also helps prevent outbreaks in schools and the wider community." />
        </div>
    </section>
}