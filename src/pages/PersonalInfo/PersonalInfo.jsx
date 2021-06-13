import React from 'react';
import { Link } from 'react-router-dom';
import Sheet from 'react-modal-sheet';
import { Button } from '@material-ui/core';
import { Formik, Form } from 'formik';
import GenderRadio from '../../components/GenderRadio/GenderRadio';
import FormInput from '../../components/FormInput/FormInput';

import './PersonalInfo.css';

const PersonalInfo = () => {

    const initialFormValues = {
        firstName: '',
        lastName: '',
        email: '',
        location: ''
    }

    return (
      <>
        <Sheet isOpen>
          <Sheet.Container>
            <Sheet.Header className="sheet-header">
              <div className="text-center">
                <h4>Create your profile</h4>
              </div>
            </Sheet.Header>
            <Sheet.Content>
              <div className="sheet-content">
                <div className="sheet-step text-center">
                  <h5>STEP 1 OF 3</h5>
                </div>
                <div className="sheet-intro text-center">
                  <h3>Personal Information</h3>
                  <p>
                    Please provide your information below So we can get to know
                    you better
                  </p>
                </div>

                <div className="sheet__select-gender">
                  <p>Select Your Gender</p>
                  <div className="gender-radios">
                    <GenderRadio gender="Male" />
                    <GenderRadio gender="Female" />
                  </div>
                </div>

                <Formik
                  initialValues={{
                    ...initialFormValues,
                  }}
                >
                  <Form>
                    <FormInput name="firstName" label="First name" />
                    <FormInput name="lastName" label="Last name" />
                    <FormInput
                      name="email"
                      type="email"
                      label="Email Address"
                    />
                    <FormInput
                      name="location"
                      type="location"
                      label="Location"
                    />

                    <Button
                      variant="contained"
                      fullWidth
                      color="primary"
                      type="submit"
                        size="large"
                        className="mt-20"
                    >
                      Continue
                    </Button>
                    
                    <div className="mt-20 text-center">
                        <Link to="/step2">I'll do this later</Link>
                    </div>
                  </Form>
                </Formik>
                
              </div>
            </Sheet.Content>
          </Sheet.Container>

          <Sheet.Backdrop />
        </Sheet>
      </>
    );
}

export default PersonalInfo;