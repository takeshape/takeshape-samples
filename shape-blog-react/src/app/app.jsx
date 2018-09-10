import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router} from 'react-router-dom';
import Routes from './routes';
import Header from './header';
import Footer from './footer';
import theme from './base.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={theme.page}>
          <Header/>
          <div className={theme.main}>
            <Routes/>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
