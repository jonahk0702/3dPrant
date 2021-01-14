import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style/style.css';
import Owl from './images/owl.PNG';


class BasicLit extends Component { 
  constructor(props) {
    super();
  }

  changeRoute = (newRoute) => {
    this.props.changeRoute(newRoute);
  }


  componentDidMount () {
 }
 

render() {
  return (
    <div>
    <div className=''>
    <br/> 
    <h2>
   May I add...
    </h2>
    <Container className=''>
  <Row>
    <Col className='block normalText'>
    Lithophanes are pretty cool.
    <hr/>
    A lithophane is almost an artwork where an image has been etched (or 3D printed)
    onto the surface of an object and this image can be seen clearly when there is a light 
    behind the object. Images with a lot of contrast between foreground and background make
    for striking lithophanes. If you are interested, upload any image and I'll check and give a quote. 

    </Col>
    <Col className='block'>
    <img src={Owl}  width="100%" height='80%' alt='An owl Lithophane' />
    <br/ >

    <hr/>
    Model available  
     
    <a href='https://www.thingiverse.com/thing:3098586'> here</a>

    </Col>
  </Row>
</Container>
    </div>
    </div>
    );
}
}

export default BasicLit;
