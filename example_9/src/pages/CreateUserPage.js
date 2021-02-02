import { Component } from "react";
import { addUser } from '../api/Users';
import UsersForm from "../component/UsersForm";

export default class CreateUserPage extends Component{

    state = {
        user: {
            name: '',
            email: ''
        }
    }


    addUser= (user) => {
        
        addUser(user)
        .then(() => {
          alert('Success');
          this.props.history.push('/users/');
        });
      }

    render(){
        return (<div>
            <h3>Add User</h3>
            <UsersForm values={this.state.user} onSubmit={this.addUser}/>
          </div>)
    }


}