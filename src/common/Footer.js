import React from "react";
import "./Footer.css";

function Footer() {
  return (
    <div className="footer col-background">
      <div className="container">
        <div className="row">
          <div className=" col-xs-12 about-company">
            <h2>Freemind</h2>
            <p className="pr-5  text-white-50">
              {" "}
              Our mission is to empower women to live their best lives, and we
              believe that our app is the perfect tool to help you achieve that.{" "}
            </p>
          </div>
        </div>
        <div className="row mt-5">
          <div className="col copyright">
            <p className="">
              <small className="text-white-50">
                © 2023. All Rights Reserved.
              </small>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
