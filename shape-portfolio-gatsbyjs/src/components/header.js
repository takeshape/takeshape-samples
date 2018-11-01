import React from 'react'
import Helmet from 'react-helmet'

const Header = ({ siteTitle }) => (
  <Helmet>
    <html lang="en" />
    <title>{siteTitle}</title>
    <meta charSet="utf-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1" />
    <link href="https://fonts.googleapis.com/css?family=Work+Sans:400,500,600,700" rel="stylesheet" />
  </Helmet>
)

export default Header
