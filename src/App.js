import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import Footer from './components/Footer';
import HomeTemplate from './templates/HomeTemplate';
import AboutTemplate from './templates/AboutTemplate';
import ContactTemplate from './templates/ContactTemplate';

import './App.css';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      title: 'Mihai Morosan',
      headerLinks: [
        { title: 'Home', path: '/' },
        { title: 'About', path: '/about' },
        { title: 'Contact', path: '/contact' },
      ],
      home: {
        title: `"...it's inspired by the brief, sure, but it's not an execution of the brief."`,
        subTitle: "Mick Gordon 2017, Doom composer speaking at the Game Developers Confrence",
        misc: 'Scroll down to see more!'
      },
      about: {
        title: "About Me",
      },
      contact: {
        title: "Contact Me",
      },
    }
  }

  render() {
    return (
        <Router>
          <Container className="p-0" fluid={true}>

            <Navbar className="border-bottom" bg="transparent" expand="lg">
              <Navbar.Brand>
                Mihai Morosan
              </Navbar.Brand>
              <Navbar.Toggle className="border-0" aria-controls="navbar-toggle"/>
              <Navbar.Collapse id="navbar-toggle">
                <Nav className="ml-auto">
                  <Link className="nav-link" to="/">Home</Link>
                  <Link className="nav-link" to="/about">About</Link>
                  <Link className="nav-link" to="/contact">Contact</Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>

            <Route path="/" exact render={() => <HomeTemplate title={this.state.home.title} subTitle={this.state.home.subTitle} misc={this.state.home.misc} />} />
            <Route path="/about" exact render={() => <AboutTemplate title={this.state.about.title}/>} />
            <Route path="/contact" exact render={() => <ContactTemplate title={this.state.contact.title}/>} />

            <Footer />

          </Container>
        </Router>
      );
  }
}

export default App;
