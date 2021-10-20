import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { Link, useHistory } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';
import './SignUp.css';

const SignUp = () => {
    const history = useHistory();
    const { control, handleSubmit, formState: { errors } } = useForm();
    const { emailPasswordSignUp, googleSignIn, userProfileUpdate, error, setError } = useFirebase();


    const onSubmit = (data) => {
        // console.log(e.target);
        const { name, email, password } = data;
        emailPasswordSignUp(name, email, password)
            .then((result) => {
                // Signed in 
                // update user name
                userProfileUpdate(name);
                // document.location.reload();
                history.push('/');

            })
            .catch((error) => {
                const errorCode = error.code;
                setError(errorCode);
            })
    }

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                history.push('/');
            })
    }
    return (
        <div className='my-5'>
            <h1 className='text-success'>Create An Account</h1>
            <MDBContainer className='my-3' id='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="name"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={
                            ({ field }) => <MDBInput
                                className='input'
                                type='text'
                                label='Enter Your Name'
                                size='lg'
                                {...field}
                            />
                        }
                    />
                    <p className='text-danger text-start'>{errors.name?.type === 'required' && "Name is required"}</p>

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
                    <p className='text-danger text-start'>{errors.email?.type === 'required' && "Email is required"}</p>

                    <Controller
                        name="password"
                        control={control}
                        defaultValue=""
                        rules={{ required: true }}
                        render={
                            ({ field }) => <MDBInput
                                type='password'
                                label='Enter Password'
                                size='lg'
                                {...field}
                            />
                        }
                    />
                    <p className='text-danger text-start'>{errors.password?.type === 'required' && "Password is required"}</p>
                    <p className='text-danger text-start'>{error}</p>

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
                    onClick={handleGoogleSignIn}
                >
                    Sign In With Google
                </MDBBtn>

            </MDBContainer>
        </div>
    );
};

export default SignUp;