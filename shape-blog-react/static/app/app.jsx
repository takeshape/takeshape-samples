import React, {Component, Fragment} from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import Header from './header';
import Footer from './footer';
import Homepage from './homepage';
import AllPosts from './all-posts';
import Post from './post';
import Author from './author';
import theme from './base.css';

export default class App extends Component {
  render() {
    return (
      <Router>
        <Fragment>
          <div className={theme.page}>
            <Header/>
            <Switch>
              <Route exact path={'/'} component={Homepage}/>
              <Route exact path={'/blog'} component={AllPosts}/>
              <Route exact path={'/blog/:title'} component={Post}/>
              <Route exact path={'/authors/:name'} component={Author}/>
            </Switch>
          </div>
          <Footer/>
        </Fragment>
      </Router>
    );
  }
}
