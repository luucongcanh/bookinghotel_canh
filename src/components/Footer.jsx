import React from "react";

function Footer() {
  return (
    <>
      <footer className="footer">
        <div className="footer_top">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">address</h3>
                  <p className="footer_text">
                    {" "}
                    200, Green road, Mongla, <br />
                    New Yor City USA
                  </p>
                  <a href="#" className="line-button">
                    Get Direction
                  </a>
                </div>
              </div>
              <div className="col-xl-3 col-md-6 col-lg-3">
                <div className="footer_widget">
                  <h3 className="footer_title">Reservation</h3>
                  <p className="footer_text">
                    +10 367 267 2678 <br />
                    reservation@montana.com
                  </p>
                </div>
              </div>
              <div className="col-xl-2 col-md-6 col-lg-2">
                <div className="footer_widget">
                  <h3 className="footer_title">Navigation</h3>
                  <ul>
                    <li>
                      <a href="#">Home</a>
                    </li>
                    <li>
                      <a href="#">Rooms</a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-xl-4 col-md-6 col-lg-4">
                <div className="footer_widget">
                  <h3 className="footer_title">Newsletter</h3>
                  <form action="#" className="newsletter_form">
                    <input type="text" placeholder="Enter your mail" />
                    <button type="submit">Sign Up</button>
                  </form>
                  <p className="newsletter_text">
                    Subscribe newsletter to get updates
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default Footer;
