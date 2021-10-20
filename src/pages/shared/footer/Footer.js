import { MDBCol, MDBContainer, MDBIcon, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark py-5 text-white'>
            <MDBContainer className='text-start ml-auto my-5'>
                <h2>About Us</h2>
                <p>The Libra Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.Libra Diagnostic Centre Ltd. is an advanced Centre for diagnostic and medical services. It is one of the prestigious diagnostic complexes of Bangladesh which started its activities in 1983. Popular Diagnostic Centre Ltd. is the largest diagnostic services provider organization in private sector of the country. It is been pioneer in introducing world latest medical equipments and advanced technology to provide round the clock medical investigations and consultancy services.</p>
            </MDBContainer>
            <MDBContainer>
                <MDBRow>
                    <MDBCol md='8'>
                        <p>© 2021 - LIBRA Diagnostics Center Limited. All rights reserved
                            Powered by LIBRA</p>
                    </MDBCol>
                    <MDBCol md='4' className='text-center'>
                        <div className='d-flex gap-3 justify-content-center'>
                            <a href="https://www.facebook.com/"><MDBIcon fab icon="facebook" /></a>
                            <a href="https://twitter.com/"><MDBIcon fab icon="twitter" /></a>
                            <a href="https://www.instagram.com/"><MDBIcon fab icon="instagram" /></a>
                        </div>
                    </MDBCol>
                </MDBRow>
            </MDBContainer>

        </div>
    );
};

export default Footer;