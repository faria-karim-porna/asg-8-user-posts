import React, { useEffect, useState } from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Home from './Components/Home/Home';
import NoMatch from './Components/NoMatch/NoMatch';
import DetailPosts from './Components/DetailPosts/DetailPosts';

function App() {

  return (
    <Router>
      <Switch>
        <Route path = "/home">
          <Home></Home>
        </Route>
        <Route exact path = "/posts/post-details/:postDetailsId">
          <DetailPosts></DetailPosts>
        </Route>
        <Route exact path = "/">
          <Home></Home>
        </Route>
        <Route path = "*">
          <NoMatch></NoMatch>
        </Route>
      </Switch>
    </Router>
    
  );
}

export default App;
