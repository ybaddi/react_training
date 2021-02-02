import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup'
import { Prompt } from 'react-router-dom';

export default function UsersForm(props){

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().email().required()
});



    return <Formik 
       initialValues={props.values}
       enableReinitialize={true}
       onSubmit={props.onSubmit}
       validationSchema = {schema}
       render={ props => {
           return <form onSubmit={props.handleSubmit}>
               <Prompt when={props.dirty} message={'are you sure?'}/>
               <label>Name</label>
               <Field name='name' />
               <ErrorMessage name='name'/> <br/>


               <label>Email</label>
               <Field name='email' />
               <ErrorMessage name='email'/> <br/>

               <button type="submit">Send</button>
           </form>
       }}
    />

}