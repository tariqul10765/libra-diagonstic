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

const Header = () => {
    const [showNavText, setShowNavText] = useState(false);

    return (
        <div>
            <MDBNavbar expand='lg' light bgColor='light'>
                <MDBContainer fluid>
                    <MDBNavbarBrand href='#'>LIBRA DIAGONSTIC</MDBNavbarBrand>
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
                                <MDBBtn color='link'>
                                    Services
                                </MDBBtn>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/login'>
                                    <MDBBtn rounded color='danger'>
                                        SIGN IN
                                    </MDBBtn>
                                </Link>
                            </MDBNavbarItem>
                            <MDBNavbarItem>
                                <Link to='/register'>
                                    <MDBBtn rounded color='warning'>
                                        SIGN UP
                                    </MDBBtn>
                                </Link>
                            </MDBNavbarItem>
                        </MDBNavbarNav>
                    </MDBCollapse>
                </MDBContainer>
            </MDBNavbar>
        </div>
    );
};

export default Header;