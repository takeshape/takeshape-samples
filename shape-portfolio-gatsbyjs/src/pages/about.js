import React from 'react'
import { graphql } from 'gatsby'
import { getImageUrl } from 'takeshape-routing'

import Layout from '../layouts/default'

const AboutPage = ({data}) => {
  const about = data.takeshape.about
  return (
    <Layout>
      <article className="about">
        <img className="about__portrait" alt={about.portrait.description} src={getImageUrl(about.portrait.path, {w: 150, h: 150, fit: 'crop'})} />
        <div className="about__biography" dangerouslySetInnerHTML={{__html: about.biography}} />
      </article>
    </Layout>
  )
}

export default AboutPage

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
      }
    }
  }
`
