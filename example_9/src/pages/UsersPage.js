import {Component} from "react";
import { getUsers, deletetUser, updateUser, addUser } from '../api/Users';
import ViewUser from '../component/ViewUser';
import UsersForm from '../component/UsersForm';

import {Link} from 'react-router-dom';

export default class UsersPage extends Component{

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
        
        
              updateUser= (user) => {
                const id = this.state.user.id;
                updateUser(id,user)
                .then(() => {
                  alert('Success');
        
                  let updatedUser = this.state.user;
                  let users = this.state.users;
                  const index = users.indexOf(updatedUser);
                  users.splice(index,1);
                  users.push(this.state.user);
                  this.setState({
                      users
                  });
                });
              }
        
        
        
              addUser = (user)=>{
                addUser(user)
              .then(() => {
                alert('Success');
                let users = this.state.users;
                users.push(user);
                this.setState({
                    users
                });
              }).catch(
                (error) => { console.log(error)
              });
            }
        

    render(){
    return (
    <div>
    <ul>
        { this.state.users.map((user,index)=>
          <li key={index}>{user.name} {' '}
          {/* <button onClick={() => this.setActive(user)} > view</button>
          <button onClick={() => this.deleteUser(user)} > delete</button> */}
          <Link to={"users/"+ user.id}>View</Link>
          </li>
        ) }
        
      </ul>
      
    <div>
      <h3>Edit User</h3>
      {this.state.user.id>0 ? (
      <UsersForm values={this.state.user} 
      onSubmit={this.updateUser} />
      ): 'select a user from the list' }
    </div>

    <div>
      <h3>Add User</h3>
      
      <UsersForm values={{
        name:'',
        email:''
      }} 
      onSubmit={this.addUser} />
      
    </div>
  </div>
      );
   }
}


