import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInput from '../../components/FormInput/FormInput';
import './SignUp.css';

const SignUp = () => {

    const INITIAL_FORM_STATE = {
        username: '',
        phone: '',
        referralCode: '',
        password: '',
        confirmPassword: ''
    };

    const formValidation = Yup.object().shape({
        username: Yup.string()
            .required('Username is required'),
        phone: Yup.number()
            .required('Phone number is required')
            .positive()
            .integer()
            .typeError('Please enter a valid phone number'),
        referralCode: Yup.string(),
        password: Yup.string()
            .required('Password is required'),
        confirmPassword: Yup.string()
            .oneOf([Yup.ref('password'), null], 'Passwords must match')
            .required('Correct password is required')
    })

    return (
        <div className="signup p-3">
            <Link to="/" className="logo">GAME</Link>

            <div className="">
                <h1>Get Started</h1>
                <p>Create your free account on the game</p>
            </div>

            <>
                <Formik
                    initialValues={{ ...INITIAL_FORM_STATE }}
                    validationSchema={formValidation}
                    onSubmit={values => {
                        console.log(values)
                    }}
                >
                    <Form>
                        <FormInput name="username" label="Username" />
                        <FormInput name="referralCode" label="Referral Code (Optional)" />
                        <FormInput name="password" label="Password" type="password" />
                        <FormInput name="confirmPassword" label="Confirm Password" type="password"/>
                    </Form>                    
                </Formik>
            </>
        </div>
    );
};

export default SignUp;