import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import Carousel from '../carousel/Carousel';
import KnowHealth from '../know-health/KnowHealth';
import LatestTecnology from '../latest-tecnology/LatestTecnology';
import Services from '../services/Services';

const Home = () => {
    const { user } = useFirebase();
    console.log(user);
    return (
        <div>
            <Carousel></Carousel>
            <Services></Services>
            <KnowHealth></KnowHealth>
            <LatestTecnology></LatestTecnology>
        </div>
    );
};

export default Home;