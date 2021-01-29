import logo from './logo.svg';
import './App.css';

import {Component} from 'react'

class  App extends Component {

  state={
    className: 'bg-green'
  }
  render(){
    const style = {color:'white', fontWeight:'bold'} ; 
    return (
    <div>
      <div className={this.state.className} style={style}>
        Text test
      </div>

      <button onClick= {() => {this.setState({className:'bg-blue'})}} > 
      change bg to blue</button>
      <button onClick= {() => {this.setState({className:'bg-green'})}} > 
      change bg to green</button>
    </div>
  );
    }
}

export default App;
