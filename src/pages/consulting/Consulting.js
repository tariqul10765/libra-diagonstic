import { MDBCol, MDBContainer, MDBPopover, MDBPopoverBody, MDBPopoverHeader, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';
import './Consulting.css';
const consultants = [
    {
        name: 'Prof. Md. Jalilur Rahman'
    },
    {
        name: 'Dr. Md. Belayet Hossain'
    },
    {
        name: 'Prof. Shamima Ferdousi'
    },
    {
        name: ' Prof. Md. Ruhul Amin'
    },
    {
        name: 'Prof. Md. Jalilur Rahman'
    },
    {
        name: 'Dr.Abu Saleh Mohiuddin'
    },
    {
        name: 'Dr.Abu Saleh Mohiuddin'
    },
    {
        name: 'Dr. Jahana Ara Nabi'
    },
    {
        name: 'Dr. Fahmida Yeshmine'
    },
    {
        name: 'Dr. Md. Delwar Hossain'
    },
    {
        name: 'Dr. Sufi H. Z. Rahman'
    },
    {
        name: 'Dr. Farzana Shegufta'
    },
    {
        name: 'Dr. Md. Saifur Rahman'
    },
    {
        name: 'Dr. Sohel Mahmud'
    },
    {
        name: 'Dr. Shahana Zaman'
    },
    {
        name: 'Dr. S. M. Lutfar Rahman'
    },
    {
        name: 'Prof. Dr. Abul Kashem Khandaker'
    },
    {
        name: 'Dr. Meera Momtaz Sabeka'
    },
]
const Consulting = () => {
    return (
        <div className='my-5'>
            <h1 className='my-5'>OUR CONSULTANTS</h1>

            <MDBContainer className='g-5'>
                <MDBRow>
                    {
                        consultants.map(consultant => {
                            return (
                                <MDBCol md='3' className='my-3'>
                                    <MDBPopover
                                        color='light'
                                        btnChildren={consultant.name}
                                        placement='top'
                                        dismiss
                                    >
                                        <MDBPopoverHeader>{consultant.name}</MDBPopoverHeader>
                                        <MDBPopoverBody>01876325423</MDBPopoverBody>
                                    </MDBPopover>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default Consulting;