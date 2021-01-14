import React, { Component } from "react";
import { Container, Row, Col, Card, Button,CardColumns } from "react-bootstrap";
import './style/style.css';
import Egg from './images/egg.jpg';
import Ian from './images/ian.jpg';
import lightHouse from './images/lightHouse.JPG';
import Pylons from './images/pylons.jpg';

class Pricing extends Component { 
  constructor(props) {
    super();
  }

  changeRoute = (newRoute) => {
    this.props.changeRoute(newRoute);
  }



render() {
  return (
    <div>
    <div className='vh-100'>
    <br/>
    <h1> Pricing</h1> 
    <Container className=''>
  <Row>
    <Col className='block normalText'>
    <h2>
    How it works.
    </h2>
    <hr/>
    <br/>
   
    The charged price is simply R20 per printing hour plus R2 per gram of plastic used. At this moment
    I only use PLA but more about that on Home Page. I also charge a small fee for an urgent print 
    plus more depending on where we'll meet. Use the examples below to get a better idea.
  
    </Col>
  
  </Row>
</Container>
<br/>
 <br/>
 
    <h2>
   Examples I've Printed 
    </h2>
    P.S. I do not own all the models. They can be accessed from links provided.
    <br/>
    All Measurements from looking straight on in form of Width/Depth/Height in cm.
   <Container className='block'>
   <CardColumns className='space'>


   <Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={lightHouse} />
  <Card.Body> 
    <Card.Title>Simple Custom Lithophane</Card.Title>
    <Card.Text>
      Send me an image and I can print it onto plastic. This took 5 Hours and 25 grams.
      <br/>
      Size:
      13/5.75/10 cm
    </Card.Text>
    <Button variant="primary">Total: R150 </Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src= {Egg}/>
  <Card.Body> 
    <Card.Title>Dragon Egg box</Card.Title>
    <Card.Text>
      Model comes from Thingiverse (available <a href="https://www.thingiverse.com/thing:2779285">here</a>). This took 4 Hours and 23 grams 
      <br/>
      Size: 5.6/5.6/7 cm
    </Card.Text>
    <Button variant="primary">Total: R90 </Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Pylons} />
  <Card.Body> 
    <Card.Title>Pylons Stand</Card.Title>
    <Card.Text>
      Model comes from Thingiverse (available <a href="https://www.thingiverse.com/thing:4718036">here</a>). This took 13.4 Hours and 58 grams 
      <br/>
      Size: 6.2/6.2/13.4 cm
    </Card.Text>
    <Button variant="primary">Total: R251</Button>
  </Card.Body>
</Card>

<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={Ian} />
  <Card.Body> 
    <Card.Title>Custom Models</Card.Title>
    <Card.Text>
      Made for an architecture student used in his building. Printed semi-transparent in 6.5 hours and 32 grams. 
      <br/>
      Size: 5.7/8.5/1.88 cm

          </Card.Text>
    <Button variant="primary">Total: R129 </Button>
  </Card.Body>
</Card>


 

  </CardColumns>
</Container>
    </div>
 
    </div>
    );
}
}

export default Pricing;
