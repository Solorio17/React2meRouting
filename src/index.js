 import React, {Component} from 'react';
 import About from './components/about';
 import { BrowserRouter as Router, Link} from 'react-router-dom';
 import Route from 'react-router-dom/Route';
 import ReactDOM from 'react-dom';
 import Jumbo from './components/jumbotron';
 import NavBar from './components/navbar';

 class App extends Component {
   render(){
       return (
         <Router>
            <div>
              <NavBar/>

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
