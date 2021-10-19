import { MDBBtn, MDBCard, MDBCardBody, MDBCardImage, MDBCardText, MDBCardTitle, MDBRipple } from 'mdb-react-ui-kit';
import React from 'react';

const Service = ({ service }) => {
    const { title, description, imgUrl } = service;
    return (
        <div>
            <MDBCard style={{ maxWidth: '22rem' }}>
                <MDBRipple rippleColor='light' rippleTag='div' className='bg-image hover-overlay'>
                    <MDBCardImage src={imgUrl} fluid alt={title} />
                    <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.15)' }}></div>
                </MDBRipple>
                <MDBCardBody>
                    <MDBCardTitle>Card title</MDBCardTitle>
                    <MDBCardText>
                        Some quick example text to build on the card title and make up the bulk of the card's content.
                    </MDBCardText>
                    <MDBBtn href='#'>Button</MDBBtn>
                </MDBCardBody>
            </MDBCard>
        </div>
    );
};

export default Service;