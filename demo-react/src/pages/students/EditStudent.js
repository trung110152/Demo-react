import {useNavigate, useParams} from "react-router-dom";
import axios from "axios";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useEffect, useState} from "react";
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

export default function EditStudent() {
    const {id} = useParams();
    const navigate = useNavigate()
    const [student, setStudent] = useState({
        name: '',
        description: '',
        action: ''
    });

    useEffect(() => {
        axios.get(`http://localhost:3000/students/${id}`).then(res => {
            setStudent(res.data)
        })
    }, []);
    return (
        <>
            <h1>Edit Student</h1>
            <Formik initialValues={student}
                    validationSchema={validateSchema}
                    onSubmit={(values) => {
                        axios.put(`http://localhost:3000/students/${id}`, values).then(() => {
                            navigate('/')
                        })
                    }}
                    enableReinitialize={true}
            >
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