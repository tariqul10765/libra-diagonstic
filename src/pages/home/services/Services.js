import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React, { useEffect, useState } from 'react';
import Service from '../service/Service';

const Services = () => {
    const [services, setServices] = useState([]);

    useEffect(() => {
        fetch('fakeData/service.json')
            .then(res => res.json())
            .then(json => setServices(json))
    }, []);
    return (
        <div>
            <MDBContainer>
                <MDBRow className='gy-3'>
                    {
                        services.map((service, index) => {
                            return (
                                <MDBCol size='4'>
                                    <Service service={service}></Service>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
            )
        </div>
    );
};

export default Services;