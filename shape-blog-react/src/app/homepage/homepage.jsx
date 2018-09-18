import React, {Fragment, Component} from 'react';
import {Link} from 'react-router-dom';
import {getImageUrl} from 'takeshape-routing';
import cx from 'classnames';
import baseTheme from '../base.css';
import theme from './homepage.css';
import route from '../utils/route';
import PostList from '../post-list';

export default class Homepage extends Component {
  render() {
    const {
      hero,
      posts,
      match
    } = this.props;

    const heroImageWidth = Math.trunc(window.innerWidth / 500) * 500 || 500;
    return (
      <Fragment>
        <div className={theme.hero} style={{backgroundImage: `url(${getImageUrl(hero.image.path, {w: heroImageWidth})})`}}>
          <div className={cx(theme.heroContainer, baseTheme.container)}>
            {hero.featuredPost &&
            <div className={theme.feature}>
              <Link to={route('post', hero.featuredPost)}>
                <p>Featured Post</p>

                <h2>{hero.featuredPost.title}</h2>
                <p>by {hero.featuredPost.author.name}</p>
              </Link>
            </div>
            }
          </div>
        </div>

        <section>
          <header className={baseTheme.header}>
            <h2>Recent Posts</h2>
          </header>

          <PostList
            posts={posts}
            match={match}
          />
          <div className={baseTheme.buttonContainer}>
            <Link className={baseTheme.button} to="/blog">View all posts</Link>
          </div>
        </section>
      </Fragment>
    );
  }
}
