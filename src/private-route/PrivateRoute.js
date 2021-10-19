import { MDBSpinner } from 'mdb-react-ui-kit';
import React from 'react';
import { Redirect, Route } from 'react-router';
import useAuth from '../hooks/useAuth';

const PrivateRoute = ({ children, ...rest }) => {
    const { user, isLoadding } = useAuth();
    console.log('private', isLoadding);
    if (isLoadding) {
        return (
            <MDBSpinner color='primary'>
                <span className='visually-hidden'>Loading...</span>
            </MDBSpinner>
        )
    }
    return (
        <div>
            <Route
                {...rest}
                render={({ location }) =>
                    user.email ? (
                        children
                    ) : (
                        <Redirect
                            to={{
                                pathname: "/login",
                                state: { from: location }
                            }}
                        />
                    )
                }
            />
        </div>
    );
};

export default PrivateRoute;