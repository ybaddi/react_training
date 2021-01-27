import React from 'react'

class Hello extends React.Component{

    constructor(props){
        super(props);
        this.increase = this.increase.bind(this);
        this.updateName = this.updateName.bind(this);

    }


    state = {
        age: 15,
        user: {
            name:"baddi",
            lastname: "youssef"
        },
        sosciallinks: [
            "facebook",
            "twitter",
        ]
    }

    decrease = () => {this.setState({age: this.state.age - 1});}
    increase(){
        this.setState({age: this.state.age + 1});
    }


    updateName(events){
        console.log(events.target.value);
        var newName = events.target.value;
        this.setState({user: { 
            ...this.state.user,
            name: newName,
        }
        }
        );
    }

    render(){
        return (<div>    
                <p>
            hello {this.props.name} i have  {this.state.age} year, my name is  {this.state.user.name} {this.state.user.lastname}  
        </p>
        <button onClick={() => {this.setState({age: this.state.age + 1})}}>
        Increase</button>

        <button onClick={this.decrease}>
        Decrease</button>

        <button onClick={this.increase}>
        Increase</button>

        <input type="text" value={this.state.user.name} onChange={this.updateName}></input>

        </div>);
    }
    
}


export default Hello;