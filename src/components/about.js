import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style/style.css';
import Rocket from './images/rock.jpg';

class About extends Component { 
  constructor(props) {
    super();
  }

  changeRoute = (newRoute) => {
    this.props.changeRoute(newRoute);
  }

render() {
  return (
    <div>
    <div className=''>
    <br/> 
    <Container className=''>
  <Row>
    <Col className='block normalText'>
    <h2>
   About Me.
    </h2>
    <hr/>
    <br/>
    I am a student at Wits univeristy who really likes 3D printing as well
    as throwing together fun websites. I use this one in order to
    buy materials (and hopefully a printer) so that I can carry on
    3D modeling and printing. 
    <br/>
    I have been 3D modeling for quite a while
    and can generally tell if a print is worth doing or if it will not work.
    I am a big supporter of rafts and prefer to avoid supports (but only when 
      I am sure I can get away with it).
      <br/>
      I guess thats about it. If you have a question you can upload a text file 
      containing the question on the Home page as your file and I'll try to get back to you.  

    </Col>
    <Col className='block'>
    <br/>
    <br/>
    <img src={Rocket}  width="90%" height='80%' alt='Rocket' />


    </Col>
  </Row>
</Container>
    </div>
    </div>
    );
}
}

export default About;
