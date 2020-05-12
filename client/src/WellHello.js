import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Redirect, Switch } from "react-router-dom";
import './WellHello.css';
import 'bootstrap/dist/css/bootstrap.css';
import Blog from "./containers/Blog/Blog"
import Gallery from "./containers/Gallery/Gallery"
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

class WellHello extends Component {
  constructor(props) {
    super(props)

    this.state = {
      isOpen: false,
  }
}

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }



    render() {



  return (
    <Router>
      <Switch>
        <Route exact path ="/blog" component={Blog} />
        <Route exact path ="/gallery" component={Gallery} />
    <div className="App">
      <Navbar color="light" light expand="md" className="navBar">
          <NavbarBrand href="/">Well, Hello!</NavbarBrand>
          <NavbarToggler onClick={this.toggle} />
          <Collapse isOpen={this.state.isOpen} navbar>
            
            <Nav className="ml-auto" navbar>
              
              <NavItem>
                <span><NavbarBrand className="homeLinks" href="/gallery">Gallery</NavbarBrand></span>
              </NavItem>
              <NavItem>
              <span><NavbarBrand className="homeLinks" href="/blog">Blog</NavbarBrand></span>
              </NavItem>
              <UncontrolledDropdown nav inNavbar>
                {/* <DropdownToggle nav caret>
                  Account
                </DropdownToggle>
                <DropdownMenu right>
                  <DropdownItem>
                    User Sign In
                  </DropdownItem>
                  <DropdownItem>
                    Admin Sign In
                  </DropdownItem>
                  <DropdownItem divider />
                  <DropdownItem>
                    Reset
                  </DropdownItem>
                </DropdownMenu> */}
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
    </div>
    </Switch>
      </Router>
  );
}
}


export default WellHello;
