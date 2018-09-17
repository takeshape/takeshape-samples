import Homepage from './homepage';
import {connect} from '../data';

export default connect(() => `/data.json`, data => ({
  hero: data.page.hero,
  posts: data.posts.items.slice(0, 3)
}))(Homepage);
