import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Login from '../../login/login/Login';

const Home = () => {
    const { user } = useFirebase();
    console.log(user);
    return (
        <div>
            <h2>{user.email}</h2>
            <Login></Login>
        </div>
    );
};

export default Home;