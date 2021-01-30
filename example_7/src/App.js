import logo from './logo.svg';
import './App.css';



import {Component} from 'react';
import ViewUser from './component/ViewUser';
import { getUsers, deletetUser } from './api/Users'
import UsersForm from './component/UsersForm'


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
    }).catch(error => {
      alert('error de backend');
    });
  }


  setActive = (user) => {
this.setState({
  user: user
})
  }

  deleteUser = (user) => {
    
      

      // delete fom server
      deletetUser(user.id)
      .then( () => {
// delete user from state
let users = this.state.users;
const index = users.indexOf(user);
users.splice(index,1);
this.setState({
  users
});
      })
      .catch(error => {
        alert(error);
      });

      }

  render(){
  return (
    <div className="App">
      <ul>
        { this.state.users.map((user,index)=>
          <li key={index}>{user.name} {' '}
          <button onClick={() => this.setActive(user)} > view</button>
          <button onClick={() => this.deleteUser(user)} > delete</button>
          </li>
        ) }
        
      </ul>
      <div>
        <h3>User details</h3>
        {this.state.user.id>0 ? ( <ViewUser user={this.state.user} />
        ) : 'select a user from the list' }
      </div>
      <div>
        <h3>Edit User</h3>
        {this.state.user.id>0 ? (
        <UsersForm values={this.state.user} onSubmit={(values) => {console.log(values)}} />
        ): 'select a user from the list' }
      </div>
    </div>
  );
  }
}

export default App;
