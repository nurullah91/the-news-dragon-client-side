import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { FaUserCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../../../../Providers/AuthProviders';

const NavigationBar = () => {
    const {user, logOut} = useContext(AuthContext);

    const handleLogOut = () =>{
        logOut()
        .then()
        .catch(error =>{
            console.log(error)
        })
    }

    return (
        <Container>
            <Navbar className='mb-5' collapseOnSelect expand="lg" bg="light" variant="light">
                <Container>
                    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                    <Navbar.Collapse id="responsive-navbar-nav">
                        <Nav className="mx-auto">
                                <Link className='me-3 text-decoration-none text-secondary' to='/'>Home</Link>
                            <Link className='me-3 text-decoration-none text-secondary' to='/about'>About</Link>
                            <Link className='me-3 text-decoration-none text-secondary' to='/career'>Career</Link>

                        </Nav>
                        <Nav>
                            
                                {
                                    user ?<><FaUserCircle style={{ fontSize: '2rem' }}></FaUserCircle><Button onClick={handleLogOut} variant="secondary">Logout</Button></> :
                                        <Link to='/login'><Button variant="secondary">Login</Button></Link>
                                }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>

        </Container>
    );
};

export default NavigationBar;