# Shape Blog React — The Shape Blog Sample Project Built With React
This is a sample project to get you started building a static website with [TakeShape](https://www.takeshape.io) (TS).
This project references the same Shape Blog content template as the [shape-blog sample project](../shape-blog) but instead of directly generating the page source, it uses the TakeShape Static Site Generator (SSG) to create a static JSON API. This static API is then used to build a JAMStack SPA with React.

## Quickstart
1. [Signup](https://app.takeshape.io/signup) or [login](https://app.takeshape.io/login) at TakeShape.
1. Create a new project and select the "Shape Blog" template
1. `git clone https://github.com/takeshape/takeshape-samples takeshape-samples && cd takeshape-samples/shape-blog`
1. `npm install` - This will install all dependencies 
1. `npx tsg init` - Follow the command prompts to set up your local environment to communicate with TS
1. `npm run start` -  The server runs on [http://localhost:3000](http://localhost:3000) by default
1. Have fun playing around with the sample site!
    - Change some markup a template file and the site will regenerate automatically
    - Try adding a new field to an existing content type then add it to the corresponding GraphQL query and template

### WebPack
- `config/webpack.config.js` - WebPack config for building the react app. WebPack bundles the app JavaScript and CSS into the `static/build` folder which is deployed along with your other static assets in `static`.
- Webpack generates `static/build/assets-manifest.json` which allows TakeShape to include the built modules with cache-busting suffixes

See the [shape-blog README for additional documentation](../shape-blog)

## Reach out
If we can make your life easier we want to hear from you at [support@takeshape.io](mailto:support@takeshape.io)
