import logo from './logo.svg';
import './App.css';
import React from 'react';

// forms
class App extends React.Component{

  state = {
    value: "default",
    selectVal:"2",
    checked: true,
    radioValue: "2"
  }

  setValue = (event)=> {
    const name= event.target.name;
    const type = event.target.type;
    let value="";

    if(type == "checkbox"){
      value = event.target.checked;
    }else{
      value = event.target.value;
    }
    this.setState({
        [name]: value
    });
  
  }



  render(){
    return (<div className="App">
        <input name="value" value={this.state.value} onChange={this.setValue}></input> 
        <hr/>
        <textarea name="value">{this.state.value}</textarea>
        <hr/>
        <textarea  name="value" value={this.state.value} onChange={this.setValue}></textarea>
        <hr />
        <select name="selectVal" value={this.state.selectVal} 
        onChange={this.setValue}>
          <option value="1">oui</option>
          <option value="2">non</option>
        </select>
        <hr />
        <label>checkbox</label>
        <input name="checked" type="checkbox" checked={this.state.checked} 
        onChange={this.setValue}/>


<hr />

<label>radiobox</label>
<div  onChange={this.setValue}>

<input name="radioValue" type="radio"   value="1"  
checked={this.state.radioValue === "1"}
/> Oui
<input name="radioValue" type="radio"   value="2" 
checked={this.state.radioValue === "2"} 
/>   Non

</div>


    </div>);
  }
}



export default App;
