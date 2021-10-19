import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Login from '../../login/login/Login';
import Carousel from '../carousel/Carousel';
import LatestTecnology from '../latest-tecnology/LatestTecnology';
import Services from '../services/Services';

const Home = () => {
    const { user } = useFirebase();
    console.log(user);
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <LatestTecnology></LatestTecnology>
        </div>
    );
};

export default Home;