const slugify = require("slugify");

exports.project = function(name) {
  const slug = slugify(name.toLowerCase());
  return `/projects/${slug}/`;
};
