import React from "react"
import { Link, StaticQuery, graphql } from "gatsby"

import { getProjectPath } from './Project'

const menuQuery = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          name
        }
      }
    }
  }
`

const Menu = ({data}) => (
  <nav className="menu">
    <div className="menu__container">
      <p className="site-name">
        <Link to="/">
          <strong>Shape Portfolio</strong>
        </Link>
      </p>
      <ul className="nostyle">
        {data.takeshape.projects.items.map((project, i) => (
          <li key={i}>
            <Link to={getProjectPath(project.name)}>{project.name}</Link>
          </li>
        ))}
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

export default () => (
  <StaticQuery query={menuQuery} render={data => <Menu data={data} />} />
)
