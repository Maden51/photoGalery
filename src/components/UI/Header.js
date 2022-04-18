import React, { useState } from 'react'
import { Nav, NavItem, Navbar, NavbarBrand, NavbarToggler, Offcanvas, OffcanvasHeader, OffcanvasBody } from 'reactstrap'
import { Link } from 'react-router-dom';

function Header() {
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
                href="/"
            >
                PhotoGallery
            </NavbarBrand>
            <NavbarToggler
                className="me-2"
                onClick={handleOpen}
            />
        </Navbar>
        <Offcanvas isOpen={isOpen} onHide={handleClose}>
                <OffcanvasHeader toggle={handleClose}>
                    Menu
                </OffcanvasHeader>
                <OffcanvasBody>
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

Header.propTypes = {}

export default Header
