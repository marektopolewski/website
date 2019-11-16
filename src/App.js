import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home'
import Projects from './pages/Projects'
import NavBar from './components/MyNavBar'
import Footer from './components/Footer'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <div id="outer-container">
          <NavBar />
            <Route render={ ({location}) =>
            <TransitionGroup component={null}>
              <CSSTransition
                key={location.key}
                timeout={450}
                classNames="fade"
              >
                <main className="page-wrap">
                  <Switch location={location}>
                    <Route exact path="/" component={Home} />
                    <Route path="/projects" component={Projects} />
                  </Switch>
                  <Footer />
                </main>
              </CSSTransition>
            </TransitionGroup>
            }/>
        </div>
      </Router>
    );
  }
}
