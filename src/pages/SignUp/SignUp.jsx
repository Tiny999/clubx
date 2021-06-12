import React from 'react';
import { Link } from 'react-router-dom';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

import FormInput from '../../components/FormInput/FormInput';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { Button } from "@material-ui/core";
import Checkbox from '@material-ui/core/Checkbox';
import './SignUp.css';

const SignUp = ({history}) => {

    const INITIAL_FORM_STATE = {
        username: '',
        phone: '',
        referralCode: '',
        password: '',
        confirmPassword: '',
        toc: false
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
        .required('Correct password is required'),
        toc: Yup.bool().required()
    })

    return (
      <div className="signup p-3">
        <Link to="/" className="logo">
          GAME
        </Link>

        <div className="signup__intro">
          <h1>Get Started</h1>
          <p>Create your free account on the game</p>
        </div>

        <>
          <Formik
            initialValues={{ ...INITIAL_FORM_STATE }}
            validationSchema={formValidation}
            onSubmit={(values) => {
              console.log('hi');
            }}
          >
            <Form onSubmit={(e) => {
              e.preventDefault();
              history.push('/login')
            }}>
              <FormInput name="username" label="Username" />
              <FormInput name="referralCode" label="Referral Code (Optional)" />
              <FormInput name="password" label="Password" type="password" />
              <FormInput
                name="confirmPassword"
                label="Confirm Password"
                type="password"
              />
              <FormControlLabel
                control={<Checkbox name="toc" color="primary" />}
                label={
                  <p>
                    I read and accept
                    <span> Terms of Service & Privacy Policy</span>
                  </p>
                }
                className="signup__toc"
              />
              <Button
                variant="contained"
                fullWidth={true}
                color="primary"
                type="submit"
                size="large"
              >
                Get Started
              </Button>
            </Form>
          </Formik>
          <div className="signup__redirect">
            <p>
              Got an account? <Link to="/login">Log in</Link>
            </p>
            <p className="copyright">All rights reserved © 2020 The Base</p>
          </div>
        </>
      </div>
    );
};

export default SignUp;