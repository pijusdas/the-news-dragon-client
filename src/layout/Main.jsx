import React from 'react';
import Header from '../pages/shared/Header/Header';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import LeftNavBar from '../pages/shared/LeftnavBar/LeftNavBar';
import RightNavBar from '../pages/shared/RightNavbar/RightNavBar';
import { Outlet } from 'react-router-dom';
import NavigationBar from '../pages/shared/NavigationBar/NavigationBar';

const Main = () => {
    return (
        <div>
            <Header></Header>
            <NavigationBar></NavigationBar>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNavBar></LeftNavBar>
                    </Col>

                    <Col lg={6}>
                         <Outlet></Outlet>
                    </Col>

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