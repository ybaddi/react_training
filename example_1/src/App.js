import logo from './logo.svg';
import './App.css';

import Welcom from './components/Welcom';
import Hello from './components/Hello';

import List from './components/list';

import Conditions from './components/Conditions';
import LifeCycle from './components/lifeCycle';
import { Component } from 'react';
import UsersList from './components/UsersList';
import AgeComponent from './components/AgeTemplate';




class App extends Component {
  
  render(){
    const age = 17;
    let users = [
    {id:3, name:"baddi", age:30},
    {id:5, name:"youssef", age:20},
    {id:6, name:"ciprian", age:25},
  ]

  let users_1 = [
    {id:4, name:"baddi_1", age:30},
    {id:5, name:"youssef_1", age:20},
    {id:7, name:"ciprian_1", age:25},
  ]
  return (
    <div className="App">
      {/* <Welcom name="Example-1"/>
      <Welcom name="Example-1"/>
      <Welcom name="Example-1"/>
      <Hello name="baddi"/>
      <List />
      <Conditions />
      <LifeCycle /> */}
      <AgeComponent age={age} />
      <AgeComponent age={17} />
      <AgeComponent age={10} />
        <br/>
      <UsersList users={users} />
      <br/>
      <UsersList users={users_1} />
    </div>
  );
  }
}

export default App;
