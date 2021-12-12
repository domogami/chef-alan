import React from "react"
import Avatar from "../images/avatar.jpeg"
import Logo from "../images/logo.png"
import "../styles/index.css"

export default function Home() {
  return (
    <div>
      <div className="Header">
        <img src={Logo} alt="logo"></img>
        <div className="HeaderText">
          <a>About</a>
          <a>Showcase</a>
          <a>Contact</a>
        </div>
      </div>
      <div className="Hero">
        <div className="PhotoText">
          <div className="HeroImage">
            <img src={ Avatar } alt="Profile" className="profile-img" />
          </div>
          <div className="FancyRectangle"></div>
          <div className="HeroText">
            <h1>Chef <span>Alan</span></h1>
            <h2>Senior Manager of R <span>&</span> D at the Cheesecake Factory</h2>
          </div>
        </div>
      </div>
      <div className="FancyDivider"></div>
    </div>
  );
}
