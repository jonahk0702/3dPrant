import React, { Component } from "react";
import { Container, Row, Col } from "react-bootstrap";
import './style/style.css';
import Main from './images/main.jpg';

class Home extends Component { 
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
    <div className=' bg-silver'>
    <br/> 
    <Container className=''>
  <Row>
    <Col className='block normalText'>
    <h2>
    3D Printing. Plain and Simple.
    </h2>
    <hr/>
    <br/>
    This is a cheap small 3D printing service. I prefer relatively small Prints that can be finished
    and delivered relatively quickly. Currently, model pick up is around Wits university but
    this can be negotiated. 
    <hr/>
    Techincally, I use 0.2 mm resolution and I add supports when needed. Almost always use a raft.
    Printing in PLA and right now only offer Black, White or Transparent colours. I should get more 
    colours soon. <br/>
    Get a quote below

    </Col>
    <Col className='block ve'>
    <h2>A print of Mine. </h2>
    <hr/>
    <img src={Main}  width="100%" height='80%'  alt='A pile of 3d prints'/>

    </Col>
  </Row>
</Container>
    </div>
    </div>
    );
}
}

export default Home;
