import qs from 'query-string';
import AllPosts from './all-posts';
import {connect} from '../data';

const getCurrentPage = location => Number(qs.parse(location.search).p) || 1;

export default connect(
  ({location}) => `/blog/page-${getCurrentPage(location)}/data.json`,
  (data, {location}) => ({
    posts: data.items,
    totalPages: data.totalPages,
    currentPage: getCurrentPage(location)
  }))(AllPosts);
