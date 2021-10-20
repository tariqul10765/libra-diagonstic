import { MDBCol, MDBContainer, MDBRow } from 'mdb-react-ui-kit';
import React from 'react';

const healths = [
    {
        name: 'Heart',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/heart_icon_hdclbd_com.png'
    },
    {
        name: 'Brain',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/brain_icon_hdclbd_com.png'
    },
    {
        name: 'Liver',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/liver_icon_hdclbd_com.png'
    },
    {
        name: 'Lungs',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/lungs_icon_hdclbd_com.png'
    },
    {
        name: 'Kidney',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/kidney_icon_hdclbd_com.png'
    },
    {
        name: 'Bone',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/bone_icon_hdclbd_com.png'
    },
    {
        name: 'Skin',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/skin_icon_hdclbd_com.png'
    },
    {
        name: 'Diabetes',
        imgUrl: 'https://www.hdclbd.com/Site_Theme/images/know-your-organ/diabetes_icon_hdclbd_com.png'
    },
]

const KnowHealth = () => {
    return (
        <div className='my-5'>
            <MDBContainer>
                <h2 className='text-start my-3 text-success'>KNOW YOUR HEALTH</h2>
                <MDBRow>
                    {
                        healths.map(health => {
                            return (
                                <MDBCol className='border m-2 p-3'>
                                    <img src={health.imgUrl} alt="" />
                                    <h4>{health.name}</h4>
                                </MDBCol>
                            )
                        })
                    }
                </MDBRow>
            </MDBContainer>
        </div>
    );
};

export default KnowHealth;