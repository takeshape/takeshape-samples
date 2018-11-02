import React from "react"
import { Link } from "gatsby"

const Menu = () => (
  <nav className="menu">
    <div className="menu__container">
      <p className="site-name">
        <Link to="/">
          <strong>Shape Portfolio</strong>
        </Link>
      </p>
      <ul className="nostyle">
        <li>
          <Link to="#project">Project Name</Link>
        </li>
      </ul>
      <hr />
      <Link to="/about">About</Link>
      <ul className="nostyle inline">
        <li className="social-profile">
          <a href="#profile" target="_blank" rel="noopener noreferrer">
            <img className="social-network-icon" src="#icon" alt="Social network icon" />
            <span className="social-network-name">Network</span>
          </a>
        </li>
      </ul>
    </div>
  </nav>
)

export default Menu
