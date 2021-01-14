import React, { Component } from "react";

import './App.css';
import { storage } from './firebase';
import NavBar from './components/navBar';
import Home from './components/home';
import { Container, Row, Col, Form, Button, Dropdown } from "react-bootstrap";
import Pricing from './components/pricing';
import About from './components/about';
import BasicLit from './components/basicLit';

let image;
let current = <div></div>;
let error = "";
let success = "";

let name = "";
let number = "";
let holds = false;
let colour = 'black';
let cur; 

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
    route: 'Home',
    a : 1,
  };
  }

  

   handleChange = (e) =>{
    if(e.target.files[0]){
      image = e.target.files[0];
      holds = true;
    }else{
      holds = false;
    }
  }
 
 nameChange = (e) =>{
  name = e.target.value;
 }


changeRoute = (newer) =>{
  
  this.setState({'route' : newer});
}

makeBlack = () => {
  colour = "black";
  this.setState({a:8})
  this.setCurrent();
}
makeWhite = () => {
  colour = "white";
  this.setState({a:45})
  this.setCurrent();
  console.log(colour)
}
makeTrans = () => {
  colour = "transparent";
  this.setState({a:7})
  this.setCurrent();
}
numberChange = (e) =>{
  number = e.target.value;
 }

   handleUpload = () =>{
    let pass = true
    if(holds === false){
      pass = false;
      error = "Upload a File. ";
    
    }


    if(number.toString().length !== 10){
      pass = false;
      error = "Please provide a South African phone number. "
    }

    if(name.length === 0){
      pass = false;
      error = "Please provide a name. "
    }
   

    
    if(pass){
      var d = new Date();


      let location = d.getMonth().toString()+'/'+d.getDate().toString()
      let hope = image.name+'.'+name+'.'+number+'.'+colour;
    const uploadTask = storage.ref(location+'/'+hope).put(image);
    uploadTask.on(
      "state_changed",
      snapshot => {},
      error => {
        console.log(error);
      },
      () => {
        storage
          .ref(location) 
          .child(hope)
          .getDownloadURL()
          .then(url => {
            if(url){
            
              success ="Success! I will get back to you ASAP." 
              this.setCurrent()
            }
            
          });
      }
      );
  }else{
    this.setCurrent()
  }
  
  }

setCurrent = () =>{
  current = <div className='vh-100'>
  <br/>
  <p className='normalText'>
  Please fill out form, upload model and I'll get back to you with a quote.
  <br/>
  </p>

  <hr/>
  <Container className="subs">
  <Row>
    
  <Col>
  
    <Form className=''> 
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" placeholder="Enter name" onChange={this.nameChange}/>
  </Form.Group>

  <Form.Group controlId="formBasicContact">
    <Form.Label>Contact Number</Form.Label>
    <Form.Control type="number" placeholder="082 123 4567" onChange={this.numberChange}/>
    <Form.Text className="text-muted">
      Used to co-ordinate everything
    </Form.Text>
  </Form.Group>
  <br/>
  
</Form>

</Col>

<Col>
  
    <Form className=''> 
  
  Colour: <Dropdown>
  <Dropdown.Toggle variant="success" id="dropdown-basic">
    {colour}
  </Dropdown.Toggle>

  <Dropdown.Menu>
    <Dropdown.Item onClick={this.makeBlack}>Black</Dropdown.Item>
    <Dropdown.Item onClick={this.makeWhite}>White</Dropdown.Item>
    <Dropdown.Item onClick={this.makeTrans}>Transparent</Dropdown.Item>
  </Dropdown.Menu>
</Dropdown>


 
  <br/>
  <br/>
  

</Form>

</Col>
 


  </Row>
  <input type="file" onChange={this.handleChange}/>
<hr/>

  <Button variant="primary" type="submit" onClick={this.handleUpload}>
    Submit
  </Button>
  <p className='errorMsg'>{error}</p>
  <p className='success'>{success}</p>
  <hr/>
</Container>
Quick disclaimer, I will get to your model as soon as I can. Prices 
may vary slightly but I will also tell you it before printing. 
<br/>
There is a chance I simply will not be able to tend to the model
as time of submission.
  
      </div>;
      this.setState({a:90});

}


componentDidMount() { 
  this.setCurrent()
}
render() { 
  let { route } = this.state;
  if(route === 'Home'){
      cur =  <div> <Home/>  {current} <br/> <br/>  <BasicLit/></div>
    }
  if(route === 'About'){
      cur =  <About/>
    }
if(route === 'Pricing'){
      cur =   <Pricing/>
    }


  return (
    <div className="App">
    <NavBar changeRoute={this.changeRoute}/>
    {cur}
        

    </div>
  );
}
}

export default App;
