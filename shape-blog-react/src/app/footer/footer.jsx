import React, {Component} from 'react';
import baseTheme from '../base.css';
import theme from './footer.css';

export default class Footer extends Component {
  render() {
    return (
      <footer className={theme.footer}>
        <div className={baseTheme.container}>
          <small>
            &copy;{(new Date()).getFullYear()}
            <a href="https://www.takeshape.io" rel="nofollow"> TakeShape Inc.</a>
          </small>
        </div>
      </footer>
    );
  }
}
