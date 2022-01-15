import React from 'react'
import './searchSection.scss'
import { useState } from 'react';
import { Container, Button, ButtonGroup } from 'react-bootstrap'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import Rent from '../rent/Rent';
import Sale from '../buy/Sale';



const SearchSection = ({ forRent, forSale }) => {
    const [rent, setRent] = useState(false);

    return (
        <div className='search'>
            <Container>
                <h3>FIND YOUR DREAM HOME</h3>
                <div className='searchBox'>
                    <ButtonGroup size="md" className="mb-2" style={{ outline: 'none' }}>
                        <Button onClick={() => setRent(true)}>For rent</Button>
                        <Button onClick={() => setRent(false)} className='bg-danger'>For sale</Button>
                    </ButtonGroup>
                </div>
                {rent ? <Rent forRent={forRent} /> : <Sale forSale={forSale} />}
            </Container>
        </div>
    )
}

export default SearchSection
