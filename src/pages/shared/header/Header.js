import {
    MDBBtn,
    MDBCollapse,
    MDBContainer,
    MDBIcon,
    MDBNavbar,
    MDBNavbarBrand,
    MDBNavbarItem,
    MDBNavbarNav,
    MDBNavbarToggler,
} from 'mdb-react-ui-kit';
import React, { useState } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';

const Header = () => {
    const [showNavText, setShowNavText] = useState(false);
    const { user, userSignOut } = useAuth();

    // const { displayName } = user;

    console.log('header e ashse!!', user, user.providerData);

    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <Link to='/'>
                        <MDBNavbarBrand href='#' className='fw-bolder text-secondary'>LIBRA DIAGONSTIC</MDBNavbarBrand>
                    </Link>
                    <MDBNavbarToggler
                        type='button'
                        data-target='#navbarText'
                        aria-controls='navbarText'
                        aria-expanded='false'
                        aria-label='Toggle navigation'
                        onClick={() => setShowNavText(!showNavText)}
                    >
                        <MDBIcon icon='bars' fas />
                    </MDBNavbarToggler>
                    <MDBCollapse navbar show={showNavText} className='collapse'>
                        <MDBNavbarNav className='ml-auto w-100 justify-content-end gap-2'>
                            <MDBNavbarItem>
                                <Link to='/health-tips'>
                                    <MDBBtn color='link'>
                                        Health Tips
                                    </MDBBtn>
                                </Link>
                                <Link to='/consulting'>
                                    <MDBBtn color='link'>
                                        Consulting
                                    </MDBBtn>
                                </Link>
                            </MDBNavbarItem>
                            {
                                user.email
                                    ? (
                                        <div className='d-flex gap-3 align-items-center justify-content-center'>
                                            {
                                                user.photoURL ?
                                                    <img
                                                        style={{ borderRadius: '50%' }} width='25'
                                                        height='25'
                                                        src='https://lh3.googleusercontent.com/a-/AOh14Gjy1icoHSMrX3Ms4s5v9DPKOtu3YPliccYnJ_ypdw=s96-c'
                                                        alt="..."
                                                    />
                                                    :
                                                    <img
                                                        style={{ borderRadius: '50%' }}
                                                        width='25'
                                                        height='25'
                                                        src="https://cdn.icon-icons.com/icons2/2506/PNG/512/user_icon_150670.png"
                                                        alt="..."
                                                    />
                                            }
                                            {
                                                user.displayName &&
                                                <p className='mb-0'>{user.displayName}</p>
                                            }
                                            <MDBBtn
                                                onClick={userSignOut}
                                                rounded
                                                className='text-dark'
                                                color='light'
                                            >
                                                Sign Out
                                            </MDBBtn>
                                        </div>
                                    )
                                    : (
                                        <MDBNavbarItem>
                                            <Link to='/login'>
                                                <MDBBtn rounded color='danger'>
                                                    SIGN IN
                                                </MDBBtn>
                                            </Link>

                                            <Link to='/register'>
                                                <MDBBtn rounded color='warning'>
                                                    SIGN UP
                                                </MDBBtn>
                                            </Link>
                                        </MDBNavbarItem>


                                    )
                            }
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default Header;