import Author from './author';
import {connect} from '../data';

export default connect(({match}) => `${match.url}/data.json`)(Author);
