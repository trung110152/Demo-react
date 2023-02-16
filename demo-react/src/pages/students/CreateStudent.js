import {useNavigate} from "react-router-dom";
import {ErrorMessage, Field, Form, Formik} from "formik";
import axios from "axios";
import * as Yup from "yup";

const validateSchema = Yup.object().shape({
    name: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    description: Yup.string()
        .min(2, "Too Short!")
        .max(50, "Too Long!")
        .required("Required"),
    action: Yup.string()
        .required("Required")
})


export default function CreateStudent() {
    const navigate = useNavigate()
    return(
        <>
            <h1>Create Student</h1>
            <Formik initialValues={{
                name:'',
                description:'',
                action:''
            }}
                    validationSchema={validateSchema}
            onSubmit={(values)=>{
                axios.post('http://localhost:3000/students',values).then(()=>{
                    navigate('/')
                })
            }}>
                <Form>
                    <Field name={'name'}></Field>
                    <ErrorMessage name={'name'}></ErrorMessage>
                    <Field name={'description'}></Field>
                    <ErrorMessage name={'description'}></ErrorMessage>
                    <Field name={'action'}></Field>
                    <ErrorMessage name={'action'}></ErrorMessage>
                    <button>Save</button>
                </Form>
            </Formik>
        </>
    )

}