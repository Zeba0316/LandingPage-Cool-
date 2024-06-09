import React from "react";
import "../css/gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
       <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill=" rgb(252, 248, 238)" fillOpacity="1" d="M0,32L48,74.7C96,117,192,203,288,213.3C384,224,480,160,576,117.3C672,75,768,53,864,74.7C960,96,1056,160,1152,181.3C1248,203,1344,181,1392,170.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
      <div className="gall-row1">
        <img className="bub-img" src="./bubble.jpg.png" />
        <div className="gall-headings">
            <h1 className="gall-h1">Let your taste more</h1>
            <h1 className="gall-h1">fun to the world</h1>
            <p className="gall-p1">We can our premium,oragnic beans for 16 hours in cold filtered water</p>
            <p className="gall-p1">to extract all the things you love about coffee water.</p>
        </div>
        <img className="bub-img" src="./bubble.jpg.png" />
      </div>
      <div className="gall-row2">
        <div className="lemon">
            <img className="green-bg" src="./homeCanBg.png"/>
            <h2 className="price">Rs 80/-</h2>
            <img  className=" smallCan"src="can1.png"/>
            <h2 className="flavor">SUNSHINE</h2>
        </div>
        <div className="berry">
            <img className="green-bg" src="./homeCanBg.png"/>
            <h2 className="price">Rs 80/-</h2>
            <img  className=" smallCan"src="can3.png"/>
            <h2 className="flavor">BERRYBON</h2>
        </div>
        <div className="mango">
            <img className="green-bg" src="./homeCanBg.png"/>
            <h2 className="price">Rs 80/-</h2>
            <img  className=" smallCan"src="can2.png"/>
            <h2 className="flavor">APPLEZING</h2>
        </div>   
      </div>
    </div>
  );
}

export default Gallery;
