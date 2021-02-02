import { Component } from "react";


class ViewUser extends Component{

    constructor(props){
        super(props);
    }

    render(){
        return(
        <div>
            <div>
            Name: {this.props.user.name}
            </div>
            <div>
            Email: {this.props.user.email}
            </div>
        </div>
        )
    }
}

export default ViewUser;