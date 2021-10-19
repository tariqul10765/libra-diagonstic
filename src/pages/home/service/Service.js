import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit';
import React from 'react';
import { Link } from 'react-router-dom';
import './Service.css';

const Service = ({ service }) => {
    const { id, title, description, imgUrl } = service;
    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={imgUrl} fluid alt={title} />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>{title}</MDBCardTitle>
                    <MDBCardText className='card__description'>
                        {description.slice(0, 100)}
                    </MDBCardText>
                    <Link to={`/service-details/${id}`}>
                        <MDBBtn color='link'>View Details</MDBBtn>
                    </Link>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default Service;