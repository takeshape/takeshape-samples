import Post from './post';
import {connect} from '../data';

export default connect(({match}) => `${match.url}/data.json`)(Post);
