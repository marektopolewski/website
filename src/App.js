import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { TransitionGroup, CSSTransition } from "react-transition-group";

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Email from './pages/Email'

import NavBar from './components/MyNavBar'
import Footer from './components/Footer'
import LoadOverlay from './components/MyLoadOverlay'

export default class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = { loading: false, delay: undefined };
  }

  setLoading = (val) => { this.setState({ loading: val });  }
  setDelay = (val) => { this.setState({ delay: val }); }

  render() {
    return (
      <Router>
        <LoadOverlay active={this.state.loading} >
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
                      <Route exact path="/projects" component={Projects} />
                      <Route exact path="/contact" render={(props) =>
                        <Contact {...props} loading={this.setLoading} delay={this.setDelay}/>
                      }/>
                      <Route exact path="/contact/send" component={Email} />
                      <Route path="/*" component={Home} />
                    </Switch>
                    <Footer />
                  </main>
                </CSSTransition>
              </TransitionGroup>
              }/>
          </div>
        </LoadOverlay>
      </Router>
    );
  }
}
