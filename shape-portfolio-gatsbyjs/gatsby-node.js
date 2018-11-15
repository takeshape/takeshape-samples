/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */
const path = require("path");
const slugify = require("slugify");

exports.createPages = async ({ actions, graphql }) => {
  const { data } = await graphql(`
    query {
      takeshape {
        projects: getProjectList {
          items {
            _id
            name
          }
        }
      }
    }
  `);

  data.takeshape.projects.items.forEach(({ _id, name }) => {
    const slug = slugify(name.toLowerCase());
    actions.createPage({
      path: `/projects/${slug}/`,
      component: path.resolve("./src/components/Project.js"),
      context: {
        projectId: _id
      }
    });
  });
};
