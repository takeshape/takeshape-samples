import React, {Component} from 'react';
import {hot} from 'react-hot-loader';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import AllPosts from './all-posts';
import Post from './post';
import Author from './author';
import theme from './base.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div className={theme.page}>
          <Header/>
          <div className={theme.main}>
            <Switch>
              <Route exact path={'/'} component={Homepage}/>
              <Route exact path={'/blog'} component={AllPosts}/>
              <Route exact path={'/blog/:title'} component={Post}/>
              <Route exact path={'/authors/:name'} component={Author}/>
            </Switch>
          </div>
          <Footer/>
        </div>
      </Router>
    );
  }
}

export default hot(module)(App);
