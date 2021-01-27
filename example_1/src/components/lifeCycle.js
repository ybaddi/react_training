import React, {Component} from 'react'

class LifeCycle extends Component {

    constructor(props){
        super(props);

        this.date = new Date();
        this.state = {
            time: this.date
        }
    }


    componentDidMount(){
        setInterval(() => {
            this.setState(
                {time: new Date()}
            )
        }, 1000);
    }

    render(){
        return <div>
            Time is {this.state.time.toLocaleTimeString()}
        </div>
    }

}


export default LifeCycle;