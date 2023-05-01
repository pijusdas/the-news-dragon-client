import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';
import { AuthContext } from '../../../provider/AuthProvider';


const NavigationBar = () => {
    const { user, logout } = useContext(AuthContext)

    const handleLogout = () => {
        logout()
             .then(()=>{})
             .catch(error => console.log(error))
    }

    return (
        <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                            <>
                                <Link to='/categorie/0'>Home</Link>
                            </>
                            <Nav.Link href="#pricing">About</Nav.Link>
                            <Nav.Link href="#pricing">Career</Nav.Link>
                        </Nav>
                        <Nav>
                            {user && <FaUserCircle style={{ fontSize: '2rem' }} />
                            }
                            {user ? <Button onClick={handleLogout} variant="dark">Logout</Button> :
                                <Link to={'/login'}><Button variant="dark">Login</Button></Link>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </Container>
    );
};

export default NavigationBar;