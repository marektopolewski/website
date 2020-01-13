import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Favicon from 'react-favicon';
import { TransitionGroup, CSSTransition } from "react-transition-group";
import { ToastContainer } from 'react-toastify';

import Home from './pages/Home'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Email from './pages/Email'
import Hobbies from './pages/Hobbies'
import Experience from './pages/Experience'

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
        <Favicon url={require('./assets/icon.png')} />
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
                      <Route exact path="/experience" component={Experience} />
                      <Route exact path="/hobbies" component={Hobbies} />
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
        <ToastContainer/>
      </Router>
    );
  }
}
