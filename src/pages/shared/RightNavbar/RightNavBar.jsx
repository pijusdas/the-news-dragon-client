import React from 'react';
import { Button, ListGroup } from 'react-bootstrap';
import { FaGoogle, FaGithub ,FaFacebook,FaTwitter,FaInstagram } from 'react-icons/fa';
import Qzone from '../QZone/Qzone';
import bg from '../../../assets/bg.png'

const RightNavBar = () => {
    return (
        <div>
            <h4 className='mt-4'>Login With</h4>
            <Button className='mb-2' variant="outline-primary"> <FaGoogle /> Logi with Google</Button>
            <Button variant="outline-secondary"><FaGithub />  Login with GitHub</Button>
            <div>
                <h4 className='mt-4'>Find Us On</h4>
                <ListGroup>
                    <ListGroup.Item > <FaFacebook /> Facebook </ListGroup.Item>
                    <ListGroup.Item> <FaInstagram/> Instragram </ListGroup.Item>
                    <ListGroup.Item> <FaTwitter/> Twitter </ListGroup.Item>
                </ListGroup>
            </div>
            <Qzone></Qzone>
            <div>
                <img src={bg} alt="" />
            </div>
        </div>
    );
};

export default RightNavBar;