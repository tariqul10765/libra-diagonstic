import { MDBContainer, MDBIcon } from 'mdb-react-ui-kit';
import React from 'react';

const Footer = () => {
    return (
        <div className='bg-dark py-5 text-white'>
            <MDBContainer className='w-50 text-start ml-auto my-5'>
                <h2>About Us</h2>
                <p>The Healthcare Diagnostic Center started its journey with the vision of taking the health care services into a new height through providing the most accurate and reliable test results to all its customers and caring the patients at the top of its values.</p>
            </MDBContainer>
            <MDBContainer className='d-flex justify-content-between'>
                <p>© 2021 - LIBRA Diagnostics Center Limited. All rights reserved
                    Powered by LIBRA</p>
                <div className='d-flex gap-3'>
                    <MDBIcon fab icon="facebook" />
                    <MDBIcon fab icon="twitter" />
                    <MDBIcon fab icon="instagram" />
                </div>
            </MDBContainer>

        </div>
    );
};

export default Footer;