import React, {Fragment, Component} from 'react';
import cx from 'classnames';
import {getImageUrl} from 'takeshape-routing';
import baseTheme from '../base.css';
import theme from './author.css';
import HtmlContent from '../content';

export default class Author extends Component {
  render() {
    const {
      name,
      photo,
      biographyHtml
    } = this.props;

    return (
      <Fragment>
        <header className={baseTheme.header}>
          <h1>{name}</h1>
        </header>
        <div className={theme.author}>
          <div className={cx(theme.container, baseTheme.container)}>
            <div className={theme.image}>
              <img src={getImageUrl(photo.path, {w: 350})} alt={''}/>
            </div>
            <HtmlContent bodyHtml={biographyHtml}/>
          </div>
        </div>
      </Fragment>
    );
  }
}
