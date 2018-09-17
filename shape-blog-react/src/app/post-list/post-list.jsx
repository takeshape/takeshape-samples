import React, {Component, Fragment} from 'react';
import {Link} from 'react-router-dom';
import qs from 'query-string';
import cx from 'classnames';
import _range from 'lodash/range';
import PostListItem from './post-list-item';
import baseTheme from '../base.css';
import theme from './post-list.css';

export default class PostList extends Component {
  render() {
    const {
      posts,
      totalPages,
      currentPage,
      showPaginate,
      match
    } = this.props;

    const postListItems = posts.map(post => <PostListItem key={post.title} {...post}/>);

    const paginationItems = Array.from(_range(1, totalPages + 1), p => {
      if (currentPage === p) {
        return (
          <li key={p}>
            <a className={theme.isCurrent}>{p}</a>
          </li>
        );
      }
      return (
        <li key={p}>
          <Link to={`${match.url}?${qs.stringify({p})}`}>{p}</Link>
        </li>
      );
    });

    const nextPageLink = (
      <Link
        to={`${match.url}?${qs.stringify({p: currentPage + 1})}`}
        className={cx({[theme.isDisabled]: currentPage === totalPages})}
      >
        {'>'}
      </Link>
    );
    const prevPageLink = (
      <Link
        to={`${match.url}?${qs.stringify({p: currentPage - 1})}`}
        className={cx({[theme.isDisabled]: currentPage === 1})}
      >
        {'<'}
      </Link>
    );

    return (
      <Fragment>
        <div className={theme.postList}>
          <div className={baseTheme.container}>
            <ul>
              {postListItems}
            </ul>
          </div>
        </div>
        {showPaginate && totalPages > 1 &&
          <div className={theme.pagination}>
            <ul className={theme.paginationList}>
              <li key={'prev'}>{prevPageLink}</li>
              {paginationItems}
              <li key={'next'}>{nextPageLink}</li>
            </ul>
          </div>
        }
      </Fragment>
    );
  }
}
