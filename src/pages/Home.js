import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/home.jpg";
import MovingComponent from 'react-moving-text';
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
<MovingComponent
  type="slideInFromBottom"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="forwards">
 <h1> Central Perk Coffee </h1>
</MovingComponent>
<br/>


<MovingComponent
  type="pulse"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="forwards">
  <p> Coffee For All</p>
</MovingComponent>


<MovingComponent
  type="fadeIn"
  duration="1000ms"
  delay="0s"
  direction="normal"
  timing="ease"
  iteration="1"
  fillMode="forwards">
  <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
</MovingComponent>
        
        
        
      </div>
    </div>
  );
}

export default Home;
