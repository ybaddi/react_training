import React from "react";
import { ErrorMessage, Field, Formik } from "formik";
import * as Yup from 'yup'

export default function UsersForm(props){

const schema = Yup.object().shape({
    name: Yup.string().required(),
    email: Yup.string().required()
});

    return <Formik 
       initialValues={props.values}
       enableReinitialize={true}
       onSubmit={props.onSubmit}
       validationSchema = {schema}
       render={ props => {
           return <form>
               <labe>Name</labe>
               <Field name='name' />
               <ErrorMessage name='name'/>


               <labe>Email</labe>
               <Field name='email' />
               <ErrorMessage name='email'/>

               <button type="submit">Send</button>
           </form>
       }}
    />

}