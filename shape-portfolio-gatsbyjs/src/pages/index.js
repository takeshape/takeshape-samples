import React from 'react'
import { Link, graphql } from 'gatsby'

import Layout from '../layouts/default'
import ProjectList from '../components/ProjectList'

const IndexPage = ({data}) => (
  <Layout>
    <ProjectList projects={data.takeshape.projects} />
  </Layout>
)

export default IndexPage

export const query = graphql`
  query {
    takeshape {
      projects: getProjectList {
        items {
          name
          startDate
          coverImage {
            path
          }
        }
      }
    }
  }
`
