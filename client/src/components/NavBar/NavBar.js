import React from "react";
import "./NavBar.css";

const NavBar = () => {
  return (
    <div className="navbar">
      <span className="logo">Auth app</span>
      <ul className="list">
        <li className="listItem">
          <img
            src="https://www.google.com/imgres?imgurl=https%3A%2F%2Fd585tldpucybw.cloudfront.net%2Fsfimages%2Fdefault-source%2Fblogs%2Ftemplates%2Fsocial%2Freactt-light_1200x628.png%3Fsfvrsn%3D43eb5f2a_2&imgrefurl=https%3A%2F%2Fwww.telerik.com%2Fblogs%2Fwhat-is-react-used-for&tbnid=1XrYUGzQ5B2E5M&vet=12ahUKEwjdofbikaD0AhVSNRoKHaMvBXkQMygHegUIARDWAQ..i&docid=4bf_ulFfjqfA9M&w=1200&h=628&itg=1&q=image%20pour%20react&ved=2ahUKEwjdofbikaD0AhVSNRoKHaMvBXkQMygHegUIARDWAQ"
            alt="image"
            className="avatar"
          />
        </li>
        <li className="listItem">Nourchen Noamen</li>
        <li className="listItem">Logout</li>
      </ul>
    </div>
  );
};

export default NavBar;
