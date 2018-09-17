import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import format from 'date-fns/format';
import theme from './post-list-item.css';
import {getImageUrl, getPostPath} from '../utils';

export default class PostListItem extends Component {
  render() {
    const {
      featureImage,
      title,
      _enabledAt,
      deck
    } = this.props;

    return (
      <li>
        <Link to={getPostPath({title})} className={theme.tout}>
          <div>
            {featureImage &&
            <img src={getImageUrl(featureImage.path, {w: 350})} alt={''}/>
            }
          </div>
          <div>
            <h3>{title}</h3>
            <p>
              <time>{format(new Date(_enabledAt), 'MMMM D, YYYY')}</time>
            </p>
            <p>{deck}</p>
          </div>
        </Link>
      </li>
    );
  }
}
