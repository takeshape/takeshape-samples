import Homepage from '../homepage';
import AllPosts from '../all-posts';
import Post from '../post';
import Author from '../author';
import {buildRoutes} from './build-routes';

const tsContentTypesToComponents = {
  homepage: Homepage,
  author: Author,
  post: {
    component: Post,
    paginateComponent: AllPosts
  }
};

export default buildRoutes(tsContentTypesToComponents)
