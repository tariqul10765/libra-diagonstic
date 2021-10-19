import React from 'react';
import useFirebase from '../../../hooks/useFirebase';
import HealthTips from '../../health-tips/HealthTips';
import ServiceDetails from '../../service-details/ServiceDetails';
import Carousel from '../carousel/Carousel';
import LatestTecnology from '../latest-tecnology/LatestTecnology';
import Services from '../services/Services';

const Home = () => {
    const { user } = useFirebase();
    console.log(user);
    return (
        <div>
            <HealthTips></HealthTips>
            {/* <Carousel></Carousel>
            <Services></Services> */}
            {/* <ServiceDetails></ServiceDetails> */}
            {/* <LatestTecnology></LatestTecnology> */}
        </div>
    );
};

export default Home;