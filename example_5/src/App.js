import logo from './logo.svg';
import './App.css';

import {Component} from 'react';
import {Formik, Field, ErrorMessage, FieldArray} from 'formik'
import * as Yup from 'yup';

class App extends Component {

  onSubmit = (value) => { console.log(value)};
  form = (props) => { 
    return (
    <form onSubmit={props.handleSubmit}>
      <label>first Name</label>
      <Field name="firstName" /> 
      <ErrorMessage name="firstName"></ErrorMessage><br/>
<hr/>


      <label>second Name</label>
      <Field name="secondName" /><ErrorMessage name="secondName"></ErrorMessage><br/>
      <label>e-Mail</label>
      <Field name="email" type="email"/>
      <ErrorMessage name="email"></ErrorMessage><br/>
      <br/>
      <hr/>
      <label>Select</label>
      <Field name="type" component="select">
        <option value="1"> Oui</option>
        <option value="2"> Non</option>
      </Field>
      <br/>
      <hr/>
      <label>Active</label>
      <Field name="active" type="checkbox" />
      <hr/>
      <br/>
      <label>Category</label>
      <Field name="category" type="radio" value="1" /> 1 < br/>
      <Field name="category" type="radio" value="2" /> 2 <br/>
      
      <ErrorMessage name="category"></ErrorMessage><br/>
      <hr/>

      <label>Facebook</label>
      <Field name="social.facebook" /> 
      <ErrorMessage name="social.facebook"></ErrorMessage><br/>
      <hr/>
      <label>twitter</label>
      <Field name="social.twitter" /> 
      <ErrorMessage name="social.twitter"></ErrorMessage><br/>
      <hr/>

      <FieldArray 
           name="friends"
           render={ arrayHelper => (
             <div>
               {props.values.friends.map((items, index)=>(
                 <div key={index}>
                 <Field name={`friends.${index}`} />

                 <button type="button" 
                 onClick={ () => arrayHelper.remove(index)} > remove </button>

<ErrorMessage name={`friends.${index}`}></ErrorMessage><br/>

                 </div>
               ))}

              <button type="button" 
                 onClick={ () => arrayHelper.push("")} > Add </button>
                 
             </div>
           )}
      />


<hr/>

<FieldArray 
           name="phoneNumbers"
           render={ arrayHelper => (
             <div>
               {props.values.phoneNumbers.map((items, index)=>(
                 <div key={index}>
                 <Field name={`phoneNumbers.${index}.number`}  placeholder="number"/>
                 <ErrorMessage name={`phoneNumbers.${index}.number`}></ErrorMessage>
                 <br/>
                 
                 <Field name={`phoneNumbers.${index}.extention`} placeholder="extention"/>
                 <ErrorMessage name={`phoneNumbers.${index}.extention`}></ErrorMessage><br/>

                 <button type="button" 
                 onClick={ () => arrayHelper.remove(index)} > remove </button>

             

                 </div>
               ))}

              <button type="button" 
                 onClick={ () => arrayHelper.push({number:" ", extention:""})} > Add </button>
                 
             </div>
           )}
      />

      <button type="submit" >Send</button>
    </form>
    );
  }

  schema = ()=>{
    const schema = Yup.object().shape({
      firstName: Yup.string().required(),
      secondName: Yup.string().required(),
      email:Yup.string().required(), 
      category:Yup.string().required(),
      social: Yup.object().shape({
        facebook: Yup.string().required("facebook is required"),
        twitter: Yup.string().required("twitter is required"),
      }),
      friends: Yup.array().of(
        Yup.string().required("friend name is required")
      ),
      phoneNumbers: Yup.array().of(
        Yup.object().shape({
          number: Yup.number().typeError("this filed accept number").required("this filed is required"),
          extention: Yup.number().typeError("this filed accept number").required("this filed is required"),
        })
      ),
    })
    return schema; 
  }

  render(){
  return (
    <div className="App">
      <Formik 
         initialValues={{
           firstName:"youssef", secondName:"baddi",
         email:"", type:"", active: false, category:'',
        social:{
            facebook:"",
            twitter: ""
        }, friends: ["Adil", "ciprian","hicham"],
        phoneNumbers:[
            {number:"06734563",
          extention:"33"
        },
        {number:"07734563",
          extention:"34"
        }
        ]
      }}
         onSubmit={this.onSubmit}
         render={this.form}
         validationSchema={this.schema}
      />
    </div>
  );
}
}

export default App;
