 import React, {Component} from 'react';
 import About from './components/about';
 import ReactDOM from 'react-dom';

 class App extends Component {
   render(){
     return (
       <div>
        <About />
       </div>
     );
   }
 }
 ReactDOM.render(<App />, document.querySelector('.container'));
