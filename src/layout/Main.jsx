import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavBar from '../pages/shared/LeftnavBar/LeftNavBar';
import RightNavBar from '../pages/shared/RightNavbar/RightNavBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNavBar></LeftNavBar>
                    </Col>
                    
                    <Col lg={6}>Main content comming.....</Col>

                    <Col lg={3}>
                        <RightNavBar></RightNavBar>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>

        </div>
    );
};

export default Main;