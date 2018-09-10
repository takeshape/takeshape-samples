import React, {Fragment, Component} from 'react';
import baseTheme from '../base.css';
import PostList from '../post-list';

export default class AllPosts extends Component {
  render() {
    const {
      posts,
      totalPages,
      currentPage,
      match
    } = this.props;

    return (
      <Fragment>
        <header className={baseTheme.header}>
          <h1>All Posts</h1>
        </header>
        <PostList
          posts={posts}
          totalPages={totalPages}
          currentPage={currentPage}
          match={match}
          showPaginate
        />
      </Fragment>
    );
  }
}
