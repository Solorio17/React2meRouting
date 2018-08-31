import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button} from 'reactstrap';
import Jumbo from './jumbotron'

const About = () =>{
    return (
      <Jumbotron>
       <h1 className="display-3">About us</h1>
       <hr/>
       <p className="lead">
         <Button color="danger">Learn More</Button>
       </p>
     </Jumbotron>
    )
}

export default About;
