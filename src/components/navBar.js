import React, { Component } from "react";
import { Nav, Navbar, Form } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.css";

export default class NavBar extends Component {


  moveHome = () => {
    this.props.changeRoute("Home");
    
  }
  movePricing = () => {
    this.props.changeRoute("Pricing");
    
  }
  moveGal = () => {
    this.props.changeRoute("Gall");
    
  }
  moveAbout = () => {
    this.props.changeRoute("About");
    
  }

  render() {


    return (
      <Navbar bg="dark" variant="dark" className="tc">
      <Navbar.Brand >3DPrant </Navbar.Brand>

      <Nav className="tc mr-auto tc">

      <Nav.Link onClick={this.moveHome}>Home</Nav.Link>
      <Nav.Link onClick={this.movePricing}>Pricing and examples</Nav.Link>
      <Nav.Link onClick={this.moveAbout}>About</Nav.Link>

      </Nav>

      <Form inline>
      
      
      </Form>


      <Form inline>
      
      
      </Form>
      </Navbar>
      );
  }
}
