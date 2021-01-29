import logo from './logo.svg';
import './App.css';

import {Component} from 'react';
import {Formik, Field} from 'formik'

class App extends Component {

  onSubmit = (value) => { console.log(value)};
  form = (props) => { 
    return (
    <form onSubmit={props.handleSubmit}>
      <label>first Name</label>
      <Field name="firstName" /> <br/>
      <label>second Name</label>
      <Field name="secondName" /><br/>
      <label>e-Mail</label>
      <Field name="email" type="email"/>
      <br/>
      <label>Select</label>
      <Field name="type" component="select">
        <option value="1"> Oui</option>
        <option value="2"> Non</option>
      </Field>
      <br/>
      <label>Active</label>
      <Field name="active" type="checkbox" />

      <br/>
      <label>Category</label>
      <Field name="category" type="radio" value="1" /> 1 < br/>
      <Field name="category" type="radio" value="2" /> 2 <br/>

      <button type="submit" >Send</button>
    </form>
    );
  }

  render(){
  return (
    <div className="App">
      <Formik 
         initialValues={{firstName:"youssef", secondName:"baddi",
         email:"", type:"", active: false, category:''}}
         onSubmit={this.onSubmit}
         render={this.form}
      />
    </div>
  );
}
}

export default App;
