// import React from "react"
import "./topbar.css";

export default function TopBar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fa-brands fa-square-facebook"></i>
        <i className="topIcon fa-brands fa-square-twitter"></i>
        <i className="topIcon fa-brands fa-square-pinterest"></i>
        <i className="topIcon fa-brands fa-square-instagram"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">HOME</li>
          <li className="topListItem">ABOUT</li>
          <li className="topListItem">CONTACT</li>
          <li className="topListItem">WRITE</li>
          <li className="topListItem">LOGOUT</li>
        </ul>
      </div>
      <div className="topRight">
        <img
          className="topImg"
          src="https://blogger.googleusercontent.com/img/a/AVvXsEitdAXLESfkMX4N4xQoYjuC93d_SfIWKcX6ocPZ97ZcSgu0pVGbFyR9NWTzrQlFzEKT46yQuHBOHyWSPgzy_eZHRhhjjoxU4DyT9li26IQh5g-Ph7960UUwMWBbmM1IHlk2Gi5xgnfMGDXYhrKDwQfwabS8Tw0lm2xlFHILb4CMkcs_SoVCXldgae5oMw=s16000"
          alt=""
        ></img>
        <i className="topSearchIcon fa-solid fa-magnifying-glass"></i>
      </div>
    </div>
  );
}
