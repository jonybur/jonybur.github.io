import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom';
import { Home } from './Pages/Home/Home.js'; 

const MainRouter = () => (
  <Router>
    <div>
      <Route exact path="/" component={Home}/>
      <Route path="/photography" component={Home}/>
      <Route path="/portfolio" component={Home}/>
    </div>
  </Router>
)

export default MainRouter;
