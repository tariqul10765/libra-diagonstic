import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    const { control, handleSubmit } = useForm();
    const { googleSignIn, emailPasswordSignIn } = useFirebase();
    const onSubmit = data => {
        const { email, password } = data;
        emailPasswordSignIn(email, password);
    }
    return (
        <div>
            <h1>PLEASE SIGN IN</h1>
            <MDBContainer className='my-3' id='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        defaultValue=""
                        render={
                            ({ field }) => <MDBInput
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

                    <MDBBtn className='w-100' color='secondary' type='submit'>
                        Sign In
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

export default Login;