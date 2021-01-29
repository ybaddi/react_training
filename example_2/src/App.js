import logo from './logo.svg';
import './App.css';
import { Component } from "react";

function Todo (props) {
  const todo = props.todo;
  const completTasks = props.completTasks;
   return (
    <li>
    {todo.text} <button onClick={completTasks} >Done</button>
    </li>
   )
}




class App extends Component {

  constructor(props){
    super(props);
  }
  
  state={
    todos : [
      {text:"first task learn ReactJs"},
      {text:"first task learn Laravel"},
      {text:"first task learn VueJs"}
    ]
  }

  completTasks = (index) => {
      console.log(index);
      
      const todos = [...this.state.todos]
      todos.splice(index,1);
      this.setState(
        {todos}
      );
      
  }


  updateNewTask = (event) => {
       console.log(event.target.value);
       
       this.setState({
        newTask: event.target.value
       }
      );
      console.log(this.state);
  }

  addTask = () => {
    console.log(this.state.newTask);
    const todos = [...this.state.todos];
    todos.push({
      text: this.state.newTask
    });
    this.setState(
      {todos}
    );
  }

  render(){


    return (
<div>
  {this.state.todos.map((todo, index) => 
  <Todo todo={todo} completTasks={() => this.completTasks(index)}  key={index} /> )}
    <input value={this.state.newtask} onChange={this.updateNewTask} />
    <button onClick={this.addTask}>add task</button>
    
</div>
    );
  }
}

export default App;
