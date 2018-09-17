import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import theme from './header.css';

export default class Header extends Component {
  render() {
    return (
      <header className={theme.pageHeader}>
        <nav>
          <Link to="/">
            <img src={'/logo.svg'} alt={'Shape Books'}/>
          </Link>
        </nav>
      </header>
    );
  }
}
