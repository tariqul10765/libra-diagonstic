import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './SignUp.css';

const SignUp = () => {
    const { control, handleSubmit, reset } = useForm();
    const { emailPasswordSignUp, googleSignIn } = useFirebase();
    const onSubmit = (data, e) => {
        // console.log(e.target);
        const { email, password } = data;
        emailPasswordSignUp(email, password);
        reset();
    }
    return (
        <div>
            <h1>PLEASE SIGN UP</h1>
            <MDBContainer className='my-3' id='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={
                            ({ field }) => <MDBInput
                                className='input'
                                type='email'
                                label='Enter Email'
                                size='lg'
                                {...field}
                            />
                        }
                    />

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={
                            ({ field }) => <MDBInput
                                className='my-3'
                                type='password'
                                label='Enter Password'
                                size='lg'
                                {...field}
                            />
                        }
                    />
                    <p className='text-start'>Already have an account? <Link to='/login'>login</Link></p>
                    <MDBBtn className='w-100' color='secondary' type='submit'>
                        Sign Up
                    </MDBBtn>
                </form>

                <h3>or</h3>

                <MDBBtn
                    className='w-100'
                    color='warning'
                    type='submit'
                    onClick={googleSignIn}
                >
                    Sign In With Google
                </MDBBtn>

            </MDBContainer>
        </div>
    );
};

export default SignUp;