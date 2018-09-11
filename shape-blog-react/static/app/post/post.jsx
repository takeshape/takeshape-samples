import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import format from 'date-fns/format';
import baseTheme from '../base.css';
import theme from './post.css';
import {getAuthorPath} from '../utils';
import HtmlContent from '../content';

export default class Post extends Component {
  render() {
    const {
      _enabledAt,
      title,
      tags,
      author,
      bodyHtml
    } = this.props;

    return (
      <Fragment>
        <header className={theme.postHeader}>
          <div className={baseTheme.container}>
            <div className={theme.postHeaderContent}>
              <h2>{title}</h2>
              <p><Link to={getAuthorPath(author)}>By {author.name}</Link></p>
              <p>{format(_enabledAt, 'MMMM D, YYYY')}</p>
              {tags.length &&
                <p>Tags: {tags.map(t => t.name).join(', ')}</p>
              }
            </div>
          </div>
        </header>
        <HtmlContent bodyHtml={bodyHtml}/>
      </Fragment>
    );
  }
}
