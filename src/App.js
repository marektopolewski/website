import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Bio from './components/Bio'
import BackgroundImage from './components/Background';
import NavBar from './components/MyNavBar'
import Footer from './components/Footer'

const Home = () => (
  <main id="page-wrap">
    <BackgroundImage />
    <Bio />
  </main>
);

const Projects = () => (
  <Bio />
);

export default function App() {
  return (
    <Router>
    <div id="outer-container">
      <NavBar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/projects" component={Projects} />
      </Switch>
      <Footer />
    </div>
  </Router>
  );
}
