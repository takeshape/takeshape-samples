import React from 'react'
import PropTypes from 'prop-types'
import Helmet from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'

import Header from '../components/header'
import Menu from '../components/menu'
import Footer from '../components/footer'
import './default.css'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Shape Portfolio" />
    <div className="container">
      <Menu />
      {children}
      <Footer />
    </div>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
