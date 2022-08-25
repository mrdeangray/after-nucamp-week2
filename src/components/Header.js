
import { useState } from 'react';
import { Navbar, NavbarBrand, Collapse, NavbarToggler, Nav, NavItem } from 'reactstrap';
import { NavLink } from 'react-router-dom'

const Header = () => {
    const [menuOpen, setMenuOpen] = useState(false)
    return (
        <Navbar dark color='primary' sticky='top' expand='md' >
            <NavbarBrand className='ms-5' href='/'>
                {/* <img src={} alt='nucamp logo' className='float-start' /> */}
                <h1 className='mt-1'>After-NuCamp </h1>
            </NavbarBrand>
            <NavbarToggler onClick={() => setMenuOpen(!menuOpen)} />
            <Collapse isOpen={menuOpen} navbar>
                <Nav className='ms-auto' navbar>
                    <NavItem>
                        <NavLink className='nav-link' to='/'>
                            <i className='fa fa-home fa-lg' />Home
                        </NavLink>
                    </NavItem>


                    <NavItem>
                        <NavLink className='nav-link' to='/challenge4'>
                            Archives
                        </NavLink>
                    </NavItem>

                    <NavItem>
                        <NavLink className='nav-link' to='/challenge5'>
                            <i className='fa fa-search fa-lg' />Search
                        </NavLink>
                    </NavItem>
                </Nav>

            </Collapse>
        </Navbar>
    )
}

export default Header