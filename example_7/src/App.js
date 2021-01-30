import logo from './logo.svg';
import './App.css';

import axios from 'axios'

import {Component} from 'react';
import ViewUser from './component/ViewUser';
import { getUsers } from './api/Users'


class App extends Component {
   
  state = {
    users: [],
    user: {}
  }

  componentDidMount =  () => {
    getUsers().then( response => {
      this.setState({
        users: response.data
      })
    });
  }


  setActive = (user) => {
this.setState({
  user: user
})
  }

  render(){
  return (
    <div className="App">
      <ul>
        { this.state.users.map((user,index)=>
          <li key={index}>{user.name} {' '}
          <button onClick={() => this.setActive(user)} > view</button>
          </li>
        ) }
        
      </ul>
      <div>
        <h3>User details</h3>
        {this.state.user.id>0 ? ( <ViewUser user={this.state.user} />
        ) : 'select a user from the list' }
      </div>
    </div>
  );
  }
}

export default App;
