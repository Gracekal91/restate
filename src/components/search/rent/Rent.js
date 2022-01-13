import React from 'react'

import '../searchResult/searchResult.scss'
import { Container, Card } from 'react-bootstrap';
import { FaBed, FaBath } from 'react-icons/fa';
import millify from 'millify';
import RentForm from './RentForm';

const Property = ({ property }) => {
    return (
        <div>
            <Card style={{ display: 'flex' }}>
                <Card.Img className='' variant="top" src={property.coverPhoto.url}
                    style={{ maxHeight: '200px' }} />
                <Card.Body>
                    <Card.Title>
                        {property.title}
                    </Card.Title>
                    <Card.Title>
                        <span>R {millify(property.price)}</span> |
                        <span> <FaBed className='me-2 ms-1' />{property.rooms}</span> |
                        <span><FaBath className='me-2 ms-1' /> {property.baths}</span>
                    </Card.Title>
                </Card.Body>
            </Card>
        </div>
    )
}

const Rent = ({ forRent }) => {

    let filteredForRent = [];

    return (
        <div>
            <RentForm forRent={forRent} />
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
                    {forRent.map((property) => {
                        return (
                            <div >
                                <Property property={property} />
                            </div>
                        )
                    })
                    }
                </div>
            </div>
        </div>
    )
}



export default Rent
