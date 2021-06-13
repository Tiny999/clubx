import React from 'react';

import { Formik, Form } from 'formik';
import { Link } from 'react-router-dom';
import { Button } from '@material-ui/core';
import * as Yup from 'yup';
import FormInput from '../../components/FormInput/FormInput';

import './Login.css';

const Login = ({history}) => {
    const currentYear = new Date().getFullYear();

    const initialFormState = {
        username: '',
        password: ''
    }

    const formValidation = Yup.object().shape({
        phone: Yup.string().required("Please enter your phone number"),
        password: Yup.string().required('Enter passowrd')
    })

    return (
      <div className="login">
        <div className="login__intro">
          <h1>Log in</h1>
          <p>Log into your account</p>
        </div>

        <Formik
          initialValues={{
            ...initialFormState,
          }}
          validationSchema={formValidation}
          onSubmit={() => {
            console.log('Submitted')
          }}
        >
          <Form
            onSubmit={(e) => {
              e.preventDefault();
              history.push('/step1');
            }}
          >
            <FormInput name="phone" label="Phone number" type="tel" />
            <FormInput name="password" label="Password" type="password" />

            <div className="login__forgotPass">
              <Link to="/forgotPassword">Forgot Password?</Link>
            </div>

            <Button
              variant="contained"
              fullWidth
              color="primary"
              type="submit"
              size="large"
            >
              Login
            </Button>
          </Form>
        </Formik>

        <div className="login__redirect text-center">
          <p>
            Don’t have an account? <Link to="/">Sign up</Link>
          </p>
        </div>

        <div className="login__copyright text-center mt-auto">
          <p>All rights reserved &copy; {currentYear} ClubX</p>
        </div>
      </div>
    );
}

export default Login;