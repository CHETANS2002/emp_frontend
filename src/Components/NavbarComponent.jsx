  import { useState } from 'react';
  import { Link } from 'react-router-dom';
  import {
    Navbar,
    NavbarBrand,
    NavbarToggler,
    Collapse,
    Nav,
    NavItem,
    NavLink
  } from 'reactstrap';

  function NavbarComponent() {
    const [isOpen, setIsOpen] = useState(false);

    const toggle = () => setIsOpen(!isOpen);

    return (
      <Navbar color="dark" dark expand="md" container="md">
        <NavbarBrand>Employee Manager</NavbarBrand>
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="ms-auto" navbar>
          
            <NavItem>
            <NavLink>
              <Link to={"/"}  style={{ textDecoration: 'none', color: 'white' }}
  onMouseEnter={e => (e.target.style.color = '#ccc')}
  onMouseLeave={e => (e.target.style.color = 'white')}>Home</Link>
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink>
              <Link to={"/add"} style={{ textDecoration: 'none', color: 'white' }}
  onMouseEnter={e => (e.target.style.color = '#ccc')}
  onMouseLeave={e => (e.target.style.color = 'white')}>Add Employee</Link>
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    );
  }

  export default NavbarComponent;
