import { MDBBtn, MDBContainer, MDBInput } from 'mdb-react-ui-kit';
import React from 'react';
import { Controller, useForm } from 'react-hook-form';
import { useHistory, useLocation } from 'react-router';
import { Link } from 'react-router-dom';
import useFirebase from '../../../hooks/useFirebase';

const Login = () => {
    let location = useLocation();
    const history = useHistory();

    const { control, handleSubmit, formState: { errors } } = useForm();
    const { googleSignIn, emailPasswordSignIn, error, setError } = useFirebase();

    const redirect_url = location.state?.from || '/';

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                console.log(result.user);
                history.push(redirect_url);
            })
    }
    const onSubmit = data => {
        const { email, password } = data;
        emailPasswordSignIn(email, password)
            .then((result) => {
                // Signed in 
                // const user = result.user;
                history.push(redirect_url);
            })
            .catch(error => {
                console.log(error);
                setError(error.code);
            })

    }
    return (
        <div className='my-5'>
            <h1 className='text-success'>PLEASE SIGN IN</h1>
            <MDBContainer className='my-3' id='form-container'>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <Controller
                        name="email"
                        control={control}
                        rules={{ required: true }}
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
                    <p className='text-danger text-start'>{errors.email?.type === 'required' && "Email is required"}</p>


                    <Controller
                        name="password"
                        control={control}
                        rules={{ required: true }}
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
                    <p className='text-danger text-start'>{errors.password?.type === 'required' && "Password is required"}</p>
                    <p className='text-danger text-start'>{error}</p>
                    <p className='text-start'>New User? <Link to='/register'>Sign Up</Link></p>
                    <MDBBtn
                        className='w-100'
                        color='secondary'
                        type='submit'>
                        Sign In
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

export default Login;