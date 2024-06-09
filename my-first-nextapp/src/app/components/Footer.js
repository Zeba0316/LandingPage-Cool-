import React from "react";
import "../css/footer.scss";

function Footer() {
  return (
    <div className="footer">
      <div className="footsec1">
        <div className="rightFoot">
          <div className="buy">
            <p>BUY</p>
            <p>CAN</p>
          </div>
          <div className="buyPara">
            <p>
              We can our premium, organic beans for 16 hours in cold filtered
              water to extract all the things you love about coffee.
            </p>
          </div>
        </div>
        <div className="midFoot">
          <div className="midFoot-row">
            <h2>Menu</h2>
            <ul>
              <li><a href="#">About us</a></li>
              <li><a href="#">Recent Products</a></li>
              <li><a href="#">Featured Products</a></li>
              <li><a href="#">Testimonials</a></li>
              <li><a href="#">Products's Gallery</a></li>
            </ul>
          </div>
          <div className="midFoot-row">
            <h2>Company</h2>
            <ul>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Terms & Conditions</a></li>
              <li><a href="#">Privacy & Policies</a></li>
              <li><a href="#">Shipping Methods</a></li>
              <li><a href="#">Support</a></li>
            </ul>
          </div>
        </div>
        <div className="leftFoot">
          <h2>Newsletter</h2>
          <input style={{ color: "black" }} placeholder="Enter your email" type="email" />
          <button>Subscribe</button>
        </div>
      </div>
      <div className="footsec2">
        <div className="socials">
          <p style={{ color: "lightgray" }}>Facebook</p>
          <p style={{ color: "lightgray" }}>Twitter</p>
          <p style={{ color: "lightgray" }}>Instagram</p>
        </div>
        <div className="rights">
          <p style={{ color: "lightgray" }}>All rights reserved to <span style={{ color: "white" }}>Drink-Cool-Association</span></p>
        </div>
        <div className="info">
          <p style={{ color: "lightgray" }}>info@DrinkCool.com</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;
