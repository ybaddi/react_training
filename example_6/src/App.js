import logo from './logo.svg';
import './App.css';

import classnames from 'classnames';

import {Component} from 'react'

class  App extends Component {

  state={
    active: true
  }
  render(){
    let classes = '';
 
    if(true){
      classes += 'bg-green ';
    }
    if(true){
      classes += 'whiteTest ';
    }
    if(true){
      classes += 'boldText ';
    }

    let classes_1 = classnames({green: 1>0, whiteTest:  6 < 4, boldText: 8 == 8});



    return (
    <div>
      <div className={classes_1} >
        Text test
      </div>

      <button onClick= {() => {this.setState({active: !this.state.active})}} > 
      change active</button>
      
    </div>
  );
    }
}

export default App;
