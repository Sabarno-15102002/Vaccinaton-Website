import React from "react";
import "./Contact.css";
export default function Contact ()
{
    return <section id="contact" class="contact">
    <div class="container">

      <div class="section-title">
        <h2>Contact</h2>
        <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint
          consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit
          in iste officiis commodi quidem hic quas.</p>
      </div>

      <div class="row">

        <div class="col-lg-5 d-flex align-items-stretch">
          <div class="info">
            <div class="address">
              <i class="fa fa-map"></i>
              <h4>Location:</h4>
              <p> Jadavpur University, Kolkata</p>
            </div>

            <div class="email">
              <i class="fa fa-envelope"></i>
              <h4>Email:</h4>
              <p>sample@example.com</p>
            </div>

            <div class="phone">
              <i class="fa fa-phone"></i>
              <h4>Call:</h4>
              <p>+1 5589 55488 55s</p>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14744.833134351007!2d88.36285572909694!3d22.49636726355133!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0271233b03a041%3A0x3ab416d1f7084129!2sElectrical%20Engineering%20Department%2C%20Jadavpur%20University!5e0!3m2!1sen!2sin!4v1676910175761!5m2!1sen!2sin"
              frameBorder="0" style={{border:0, width: "100%", height: "290px"}} allowfullscreen></iframe>
          </div>

        </div>

        <div class="col-lg-7 mt-5 mt-lg-0 d-flex align-items-stretch">
          <form action="forms/contact.php" method="post" role="form" class="php-email-form">
            <div class="row">
              <div class="form-group col-md-6">
                <label for="name">Your Name</label>
                <input type="text" name="name" class="form-control" id="name" required/>
              </div>
              <div class="form-group col-md-6">
                <label for="name">Your Email</label>
                <input type="email" class="form-control" name="email" id="email" required/>
              </div>
            </div>
            <div class="form-group">
              <label for="name">Subject</label>
              <input type="text" class="form-control" name="subject" id="subject" required/>
            </div>
            <div class="form-group">
              <label for="name">Message</label>
              <textarea class="form-control" name="message" rows="10" required></textarea>
            </div>
            <div class="text-center"><button type="submit" className="btn btn-lg btn-dark">Send Message</button></div>
          </form>
        </div>

      </div>

    </div>
  </section>
}