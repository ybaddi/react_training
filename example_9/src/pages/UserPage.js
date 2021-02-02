import { Component } from "react";
import { getUser, getUsers } from '../api/Users';
import ViewUser from "../component/ViewUser";

export default class UserPage extends Component{

    state = {
        user: {}
    }

    componentDidMount = () => {
        const userID = this.props.match.params.id;
        console.log(userID);
        getUser(userID).then(response => {
            this.setState({
                user: response.data
            })
        }).catch(error => alert('error on getUser function'));
    }
    render(){
        return (<div>
            <h3>User details</h3>
            <ViewUser user={this.state.user}/>
          </div>)
    }
}