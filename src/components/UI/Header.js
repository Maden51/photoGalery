import React, { useState } from 'react'
import {
    Nav, 
    NavItem, 
    Navbar, 
    NavbarBrand,
    NavbarToggler, 
    Offcanvas,
    OffcanvasHeader, 
    OffcanvasBody 
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

function Header(props) {
    const [isOpen, setIsOpen] = useState(false)

    const handleClose = () => setIsOpen(false);
    const handleOpen = () => setIsOpen(true);

  return (
    <div className="header">
        <Navbar
            color="faded"
            light
        >
            <NavbarBrand
                className="me-auto"
            >
                {props.title}
            </NavbarBrand>
            <NavbarToggler
                className="me-2"
                onClick={handleOpen}
            />
        </Navbar>
        <Offcanvas isOpen={isOpen}>
                <OffcanvasHeader toggle={handleClose}>
                    Menu
                </OffcanvasHeader>
                
                <OffcanvasBody>
                <div className="user-info">
                    <img src="https://i.pravatar.cc/100" alt="аватар" className="avatar" />
                    <span>userName</span>
                    <span>Email@email.com</span>
                </div>
                    <Nav vertical>
                        <NavItem>
                            <Link to="/">
                                Галерея
                            </Link>
                        </NavItem>
                        <NavItem>
                            <Link to="/aboutMe">
                                Обо мне
                            </Link>
                        </NavItem>
                    </Nav>   
                </OffcanvasBody>
        </Offcanvas>
    </div>
  )
}

Header.propTypes = {
    title: PropTypes.string
}

export default Header
