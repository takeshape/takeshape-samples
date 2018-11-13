[![TakeShape](https://img.shields.io/badge/cms-takeshape-brightgreen.svg?logoWidth=14&logo=data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADgAAAA4CAYAAACohjseAAABG2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iWE1QIENvcmUgNS41LjAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+Gkqr6gAAAYFpQ0NQc1JHQiBJRUM2MTk2Ni0yLjEAACiRdZHPK0RRFMc/BtEYzZRZKNRLw8qIURMbZSSUpDHKr83MMz/U/Hi99yTZKtspSmz8WvAXsFXWShEpWVhZExum5zyjZpI5t3PP537vPad7zwVHJK1mjJoeyGRNPTwaUmbn5pW6Z5y04cFLS1Q1tKGpqQkq2scdVXa88du1Kp/71xqW4oYKVfXCg6qmm8JjwhOrpmbztrBXTUWXhE+Fu3S5oPCtrceK/GJzsshfNuuR8DA4PMJKsoxjZaym9IywvBxfJr2i/t7Hfokrnp2Zltgu3opBmFFCKIwzwjBBehmQOYifAN2yokJ+z0/+JDnJVWXWWENnmSQpTLpEXZHqcYkJ0eMy0qzZ/f/bVyPRFyhWd4Wg9smy3jqgbgsKecv6PLSswhFUP8JFtpSfO4D+d9HzJc23D+4NOLssabEdON+E5gctqkd/pGpxRyIBryfQOAdN1+BcKPbsd5/je4isy1ddwe4edMp59+I3T6Zn2yrilxMAAAAJcEhZcwAACxMAAAsTAQCanBgAAAJVSURBVGiB7dm/b9NAGMbx70uBMnRhQyA6VMzsiBWJFQYWdthYEP9CN2aG8FdApQpYEBM7A0JCLDCwMVAJIUA8HeIrruPE97O2gx8pSi6SL+/Hd7F9NkyZMuW/jaTLku72XUeRVLhPmude3/VkTQOntUIuwa0HsgM3bqQnLjvSJD3I1Vkjb8zsnWtIugPsuGbtvf55E9it2vfN7GlyFZ57NDTPJJ2JqGUr+0gWwO1JOhtZSxOYjDzdaD8Hfif09xV4ZGa/JF0CrgMb1e9s1F719g8zm63ocyaJ6Ona2FvnozpZ7HNb/geUL7Xt2kYwbSRzAwNxIcA4ZE5gBC4UGI7MBYzExQCDkKdiQU0c8Jp/57nSmfkik4E94Fy8kEnAHnEuncho4ABwLiuRUcAB4VyWIoOBA8S5tCKDgAPGuSwgvYEjwLkcQ3oBR4RzOUI2VxMLkXSRceFcZpL++ozgN+Bj6WoK5AB43wk0s5/ALeBl8ZLy5QC4aWZvvf6DI0Me4SDgKDoS5DEcBJ4HB45cwEHElcxAka04iLwWHRhyKQ4SVhMDQa7EQeJ6sGdkJw4yrOh7QnrhINM9mRNGeuMgExBODBmEA4rc+D0n6UWB24bfJV2LKSgrMALpA4zDMX8+qFr7FWkPX/bN7IlDAlc8tvljZh+qbbaYT8N6wqdlPZ57OSQPowqhdQSjR64kMBrZAKbjmK/oH6d20pILkrbN7LP7QtJt4EbHdu7Badq07CPyP/BkGble4oEcL85lBXL8OJcW5PrgXGrI9cO5VMirfdcxZcqUcjkEtBb8Ina+cYEAAAAASUVORK5CYII=&longCache=true&colorB=5edeb3&colorA=5539d2&style=for-the-badge)](https://www.takeshape.io/)

# Shape Portfolio — A TakeShape Sample Project Build With Gatsby.js
This is a sample project to get you started building a static website with [TakeShape](https://www.takeshape.io) (TS). You can see the sample project in action here: [https://shape-portfolio.takeshapesampleproject.com/](https://shape-portfolio.takeshapesampleproject.com/)


## Quickstart
1. [Signup](https://app.takeshape.io/signup) or [login](https://app.takeshape.io/login) at TakeShape.
1. Create a new project and select the "Shape Portfolio" template
1. Create a new API key in TakeShape and name is "Gatsby". Copy the API key into your clipboard
1. `git clone https://github.com/takeshape/takeshape-samples takeshape-samples && cd takeshape-samples/shape-portfolio`
1. Make a `.env` file that contains the following 
```
TAKESHAPE_PROJECT=<TAKESHAPE-PROJECT-ID-FROM-URL>
TAKESHAPE_TOKEN=<TAKESHAPE-API-KEY-YOU-COPIED>
```
1. `npm install` - This will install all dependencies 
1. `npm run develop` -  The server runs on [http://localhost:8000](http://localhost:8000) by default
1. Have fun playing around with the sample site!
    - Change some markup a template file and the site will regenerate automatically
    - Try adding a new field to an existing content type then add it to the corresponding GraphQL query and template   

## GraphQL tips
*If you're using JetBrains we recommend using the  [JS GraphQL plugin](https://github.com/jimkyndemeyer/js-graphql-intellij-plugin). This plugin allows for real time validation of your queries against the schema you define in TS though modeling*

## Reach out
If we can make your life easier we want to hear from you at [support@takeshape.io](mailto:support@takeshape.io)

    
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    ├── .gitignore
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package-lock.json
    ├── package.json
    ├── README.md
    └── yarn.lock

  1.  **`/node_modules`**: This directory contains all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  1.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser) such as your site header or a page template. `src` is a convention for “source code”.
  
  1.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.
    
  1.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://www.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  1.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://www.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  1.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby Node APIs](https://www.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  1.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  1.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  1.  **`package-lock.json`** (See `package.json` below, first). This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. **(You won’t change this file directly).**
  
  1.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  1.  **`README.md`**: A text file containing useful reference information about your project.
  
  1.  **`yarn.lock`**: [Yarn](https://yarnpkg.com/) is a package manager alternative to npm. You can use either yarn or npm, though all of the Gatsby docs reference npm.  This file serves essentially the same purpose as `package-lock.json`, just for a different package management system.

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.org/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

You can optionally set up [continuous deployment of your templates](https://www.takeshape.io/docs/continuous-deployment-of-templates/).
