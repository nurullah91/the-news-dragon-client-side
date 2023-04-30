import React, { useContext } from 'react';
import logo from '../../../../../assets/logo.png'
import moment from 'moment';
import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Marquee from 'react-fast-marquee';

const Header = () => {

    return (
        <Container>
            <div className='text-center mb-2'>
                <img src={logo} alt="" />
                <p className='text-secondary'><span>Journalism Without Fear or Favour</span></p>
                <p>{moment().format("dddd, MMMM D, YYYY")}</p>
            </div>
            <div className='d-flex bg-light mb-3 p-3'>
                <Button variant="danger">Latest</Button>
                <Marquee speed={80}>
                    I can be a React component, multiple React components, or just some text.
                </Marquee>

            </div>
        </Container>
    );
};

export default Header;