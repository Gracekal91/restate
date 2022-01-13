import React from 'react'
import './hero.scss'
import { Container, Row, Col } from 'react-bootstrap'
import {FaBed} from 'react-icons/fa';

const Hero = () => {
    return (
        <div className="heroSection">
            <div className='heroOverlay'></div>
            <div className='hero'>
                <div className='container content'>
                   <div className="heading">
                        <h1>Modern homes<br />For modern <br /> People</h1>
                   </div>
                   <div className='heroFeatures'>
                    <Container className='text-center mobileOnly'>
                        <Row className="firstRow">
                            <Col style={{lineHeight:'0'}}>
                                <h4><FaBed style={{fontSize:'1.5rem'}} className='me-2'/> 3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2>
                            </Col>
                            <Col>
                            <h4><FaBed className='me-2'style={{fontSize:'1.5rem'}}/>3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2>
                            </Col>
                        </Row>
                        <Row className="secondRow">
                            <Col>
                            <h4><FaBed style={{fontSize:'1.5rem'}} className='me-2'/>3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2></Col>
                        </Row>
                    </Container>

                    <Container className='text-center tabletOnly'>
                        <Row>
                            <Col  className="firstRow">
                                <h4><FaBed style={{fontSize:'1.5rem'}} className='me-2'/> 3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2>
                            </Col>
                            <Col  className="firstRow">
                            <h4><FaBed className='me-2'style={{fontSize:'1.5rem'}}/>3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2>
                            </Col>

                            <Col className='secondRow'>
                            <h4><FaBed style={{fontSize:'1.5rem'}} className='me-2'/>3 Bedrooms</h4>
                                <p>Available on March</p>
                                <h2>R 6,900</h2></Col>
                        </Row>
                    </Container>
                   </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
