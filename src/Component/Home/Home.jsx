import React from "react";
import "./Home.css";
export default function Home() {
  return (
    <section id="home">
      <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <div className="row">
              <div className="col-lg-6">
                <div className="home-text">
                  <div className="text slide-up">
                    <h5>Lorem ipsum dolor </h5>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      While COVID-19 pandemic was disrupting our daily lives, it is important that our children get their recommended vaccines as these Vaccines protect them from some serious diseases.Vaccination is a generally safe method of preventing several deadly diseases and their related complications. Some of the most common diseases that can affect newborns, infants, children, or even adults include.
                    </p>
                    <button className="btn btn-lg btn-dark">Book Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="Image/home.png" alt="" />
              </div>
            </div>
          </div>
          <div className="carousel-item">
            <div className="row">
              <div className="col-lg-6">
                <div className="home-text">
                  <div className="text slide-up">
                    <h5>Lorem ipsum dolor </h5>
                    <h3>Lorem ipsum dolor sit amet</h3>
                    <p>
                      Vaccines help in boosting the immune system of an individual to protect against deadly and dangerous diseases.The administration of vaccines is called VACCINATION. Mostly, newborns and children are the front-line patients who get affected by the deadly diseases like measles, tetanus, diphtheria and whooping cough(pertussis) etc.
                    </p>
                    <button className="btn btn-lg btn-dark">Book Now</button>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <img src="Image/home1.png" alt="" />
              </div>
            </div>
          </div>

        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>

    </section>
  );
}
