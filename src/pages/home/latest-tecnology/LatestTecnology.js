import { MDBContainer } from 'mdb-react-ui-kit';
import React from 'react';
import './LatestTecnology.css';

const LatestTecnology = () => {
    return (
        <div>
            <MDBContainer className='text-start'>
                <h2>OUR LATEST <span className='text-success'>TECHNOLOGY</span></h2>
                <p>At Libra Diagnostic Centre Ltd. We have been actively revamping our technologies with the most modern one since the first day of our journey. All the aged machineries are being regularly replaced with the latest one. Technical team members are maintaining the machineries actively so that these can provide the best outcome.</p>
            </MDBContainer>

            <div className='d-flex tec__container'>
                <img src="https://www.populardiagnostic.com/public/media/42-2019020216300.jpg" alt="..." />
                <img src="https://www.populardiagnostic.com/public/media/43-2019020216300.jpg" alt="..." />
                <img src="https://www.populardiagnostic.com/public/media/44-2019020216300.jpg" alt="..." />
                <img src="https://www.populardiagnostic.com/public/media/45-2019020216300.jpg" alt="..." />
            </div>
        </div>
    );
};

export default LatestTecnology;