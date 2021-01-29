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
          this.setState({
            value: event.target.value
          });
  }

  setSelectVal = (event)=> {
    this.setState({
      selectVal: event.target.value
    });
}

setCheckboxValue = (event)=> {
  this.setState({
    checked: event.target.checked
  });
}

changeRadio = (event)=> {
  this.setState({
    radioValue: event.target.value
  });
}

  render(){
    return (<div className="App">
        <input value={this.state.value} onChange={this.setValue}></input> 
        <hr/>
        <textarea>{this.state.value}</textarea>
        <hr/>
        <textarea value={this.state.value} onChange={this.setValue}></textarea>
        <hr />
        <select value={this.state.selectVal} onChange={this.setSelectVal}>
          <option value="1">oui</option>
          <option value="2">non</option>
        </select>
        <hr />
        <label>checkbox</label>
        <input type="checkbox" checked={this.state.checked} 
        onChange={this.setCheckboxValue}/>

        <hr />

        <label>radiobox</label>
        <input type="radio"   value="1"  
        checked={this.state.radioValue === "1"}
        onChange={this.changeRadio}/> Oui
        <input type="radio"   value="2" 
        checked={this.state.radioValue === "2"} 
        onChange={this.changeRadio}/>   Non


<hr />

<label>radiobox</label>
<div onChange={this.changeRadio}>

<input type="radio"   value="1"  
checked={this.state.radioValue === "1"}
/> Oui
<input type="radio"   value="2" 
checked={this.state.radioValue === "2"} 
/>   Non

</div>


    </div>);
  }
}



export default App;
