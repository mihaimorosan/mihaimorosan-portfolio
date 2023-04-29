import React from 'react';
import {
  BrowserRouter as Router,
  Route,
  Link,
  Routes
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
      logo: '//MIHAI',
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
              <Container>
                <Navbar.Brand>
                  {this.state.logo}
                </Navbar.Brand>
                  <Nav className="ml-auto">
                    <Link className="nav-link" to="/">Home</Link>
                    <Link className="nav-link" to="/about">About</Link>
                    <Link className="nav-link" to="/contact">Contact</Link>
                  </Nav>
              </Container>
            </Navbar>

            <Routes>
              <Route path="/" exact element={<HomeTemplate title={this.state.home.title} subTitle={this.state.home.subTitle} misc={this.state.home.misc} />} />
              <Route path="/about" exact element={<AboutTemplate title={this.state.about.title}/>} />
              <Route path="/contact" exact element={<ContactTemplate title={this.state.contact.title}/>} />
            </Routes>
            <Footer />

          </Container>
        </Router>
      );
  }
}

export default App;
