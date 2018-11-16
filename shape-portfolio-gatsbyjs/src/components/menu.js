import React from "react";
import { Link, StaticQuery, graphql } from "gatsby";
import { getImageUrl } from "takeshape-routing";

import routes from "../routes";

const menuQuery = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          name
        }
      }
      about: getAbout {
        socialProfiles {
          profileUrl
          socialNetwork
          socialNetworkIcon {
            path
          }
        }
      }
    }
  }
`;

const Menu = ({ data }) => (
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
            <Link to={routes.project(project.name)}>{project.name}</Link>
          </li>
        ))}
      </ul>
      <hr />
      <Link to="/about">About</Link>
      <ul className="nostyle inline">
        {data.takeshape.about.socialProfiles.map((profile, i) => (
          <li className="social-profile" key={i}>
            <a
              href={profile.profileUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                className="social-network-icon"
                src={getImageUrl(profile.socialNetworkIcon.path)}
                alt="Social network icon"
              />
              <span className="social-network-name">
                {profile.socialNetwork}
              </span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  </nav>
);

export default () => (
  <StaticQuery query={menuQuery} render={data => <Menu data={data} />} />
);
