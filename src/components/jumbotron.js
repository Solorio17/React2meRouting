import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Jumbotron, Button} from 'reactstrap';

const Jumbo = () =>{
  return(
    <Jumbotron >
     <h1 className="display-3">Welcome Home</h1>
     <hr/>
     <p className="lead">
       <Button color="danger">Learn More</Button>
     </p>
   </Jumbotron>
  )
}

export default Jumbo
