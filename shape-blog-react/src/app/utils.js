import _kebabCase from 'lodash/kebabCase';
import qs from 'query-string';

export const getImageUrl = (path, params ={}) => `${'https://takeshape.imgix.net'}/${path}?${qs.stringify(params)}`;

// Custom Routing Helpers
export const getAuthorPath = author => `/authors/${_kebabCase(author.name)}`;
export const getPostPath = post => `/blog/${_kebabCase(post.title)}`;

