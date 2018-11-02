import React from 'react'
import PropTypes from 'prop-types'

import Header from '../components/header'
import Menu from '../components/menu'
import Container from '../components/container'
import Footer from '../components/footer'
import './default.css'

const Layout = ({ children }) => (
  <>
    <Header siteTitle="Shape Portfolio" />
    <Container>
      <Menu />
      <div>
        {children}
      </div>
      <Footer />
    </Container>
  </>
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
