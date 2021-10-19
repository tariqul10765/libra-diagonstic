import { MDBContainer } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router';

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [service, setService] = useState({});

    useEffect(() => {
        fetch('/fakeData/service.json')
            .then(res => res.json())
            .then(json => {
                json.map(element => element.id === parseInt(serviceId) && setService(element))
            })
    }, [serviceId])

    return (
        <div>
            <div className='vw-100'>
                <img width='100%' height='400' src={service.imgUrl} alt="" />
            </div>
            <MDBContainer className='gy-5'>
                <h1>{service.title}</h1>
                <p>{service.description}</p>
            </MDBContainer>
        </div>
    );
};

export default ServiceDetails;