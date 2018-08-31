 import React, {Component} from 'react';
 import About from './components/about';
 import { BrowserRouter as Router, Link} from 'react-router-dom';
 import Route from 'react-router-dom/Route';
 import ReactDOM from 'react-dom';
 import Jumbo from './components/jumbotron'
 import 'bootstrap/dist/css/bootstrap.min.css';
 import {Navbar, NavbarBrand, NavLink, NavItem, Nav} from 'reactstrap';

 class App extends Component {
   render(){
       return (
         <Router>
            <div>
              <Navbar className="navbar navbar-light bg-primary" expand="lg">
                <NavbarBrand href="/" className="text-white font-italic font-weight-bold">ReactRouter</NavbarBrand>
                  <Nav className="mr-auto" navbar>
                    <NavItem className="pull-left">
                      <NavLink color="dark" href="/" className="text-white font-italic font-weight-bold">Home</NavLink>
                    </NavItem>
                    <NavItem className="float-left">
                      <NavLink href="/about" className="text-white font-italic font-weight-bold">About</NavLink>
                    </NavItem>
                  </Nav>
              </Navbar>

              <Route path="/" exact render={
                  ()=>{
                    return ( <Jumbo />);
                  }
                }/>
              <Route path="/about" exact render={
                  ()=>{
                    return (<About />);
                  }
                }/>
            </div>
         </Router>
       );
   }
 }
 ReactDOM.render(<App />, document.querySelector('.container-fluid'));
