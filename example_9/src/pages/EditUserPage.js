import { Component } from "react";
import { getUser,updateUser } from '../api/Users';
import UsersForm from "../component/UsersForm";

export default class EditUserPage extends Component{

    state = {
        user: {
            name: '',
            email: ''
        }
    }

    componentDidMount = () => {
        const userID = this.props.match.params.id;
        getUser(userID).then(response => {
            this.setState({
                user: response.data
            })
        }).catch(error => alert('error on getUser function'));
    }

    updateUser= (user) => {
        const id = this.state.user.id;
        updateUser(id,user)
        .then(() => {
          alert('Success');
          this.props.history.push('/users/');
        });
      }

    render(){
        return (<div>
            <h3>User details</h3>
            <UsersForm values={this.state.user} onSubmit={this.updateUser}/>
          </div>)
    }
}