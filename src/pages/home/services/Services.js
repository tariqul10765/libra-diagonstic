import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import useService from '../../../hooks/useService';
import Service from '../service/Service';

const Services = () => {
    const { services } = useService();

    return (
        <div className='my-5'>
            <MDBContainer className='text-start mb-3'>
                <h2 className='text-success'>OUR SERVICES</h2>
                <h5>We are committed to provide affordable services, without any compromise on the quality of service </h5>
                <h6>– so that you are able to remain happy.</h6>
            </MDBContainer>
            <MDBContainer>
                <MDBRow className='gy-3'>
                    {
                        services.map((service, index) => {
                            return (
                                <MDBCol md='4'>
                                    <Service service={service}></Service>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Services;