import React from "react";
import { graphql } from "gatsby";
import { getImageUrl } from "takeshape-routing";

import Layout from "../layouts/default";

const AboutPage = ({ data }) => (
  <Layout>
    <article className="about">
      <img
        className="about__portrait"
        src={getImageUrl(data.takeshape.about.portrait.path, {
          h: 150,
          w: 150,
          fit: "crop"
        })}
      />
      <div
        className="about__biography"
        dangerouslySetInnerHTML={{ __html: data.takeshape.about.biography }}
      />
    </article>
  </Layout>
);

export default AboutPage;

export const query = graphql`
  query {
    takeshape {
      about: getAbout {
        biography: biographyHtml
        portrait {
          title
          description
          path
        }
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
