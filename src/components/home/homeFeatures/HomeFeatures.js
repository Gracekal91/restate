import React from 'react'
import './homeFeatures.scss'
import { BsBrightnessHighFill } from 'react-icons/bs'
import { BiRevision } from 'react-icons/bi'
import { GiOfficeChair } from 'react-icons/gi'
import { Container } from 'react-bootstrap'

const HomeFeatures = () => {
    return (
        <div className='homeFeatures'>
            <Container>
                <div className='content'>
                    <h3>Why are we the best ?</h3>
                    <p>Who are in extremely love with eco friendly system.</p>
                </div>
                <div className='CardsContainer'>
                    <div>
                        <h4><BsBrightnessHighFill className="me-2" style={{fontSize:'2rem', marginBottom:'.2rem'}}/>Highly recommended</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                
                    <div>
                        <h4><BiRevision className="me-2" style={{fontSize:'2rem', marginBottom:'.2rem'}}/>Positive Reviews</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                    <div>
                        <h4><GiOfficeChair className="me-2" style={{fontSize:'2rem', marginBottom:'.2rem'}}/>Professional Service</h4>
                        <p>Usage of the Internet is becoming more common due to rapid advancement of technology and power.</p>
                    </div>
                </div>
                    <div>
                        <div className='imageGrid'>
                            <div className='img1'>
                                image 1
                            </div>
                            <div className='img2'>
                                image 2
                            </div>
                            <div className='img3'>
                                image 3
                            </div>
                        </div>
                    </div>
            </Container>
        </div>
    )
}

export default HomeFeatures
