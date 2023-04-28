import { Button, ListGroup } from 'react-bootstrap';
import React from 'react';
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import QZone from '../QZone/QZone';
import rightNavBg from '../../../../../assets/bg.png'

const RightNav = () => {
    return (
        <div>
            <div>
                <h4 className='mb-4'>Login With</h4>
                <Button className='mb-2' variant="outline-primary"><FaGoogle /> Login With Google</Button>{' '}
                <Button variant="outline-secondary"><FaGithub /> Login With Github</Button>{' '}

            </div>
            <div>
                <h4 className='my-4'>FInd Us On</h4>
                <ListGroup>
                    <ListGroup.Item className='p-3'><FaFacebook /> Facebook</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaTwitter /> Twitter</ListGroup.Item>
                    <ListGroup.Item className='p-3'><FaInstagram /> Instagram</ListGroup.Item>
                </ListGroup>
            </div>
            <QZone></QZone>

            <div>
                <img src={rightNavBg} alt="" />
            </div>
        </div>
    );
};

export default RightNav;