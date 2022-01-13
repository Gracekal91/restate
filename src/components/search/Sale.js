import React from 'react'
import { Form, Row, Col, Button } from 'react-bootstrap'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import '../search/searchResult/searchResult.scss'
import { Container, Card } from 'react-bootstrap';
import { FaBed, FaBath } from 'react-icons/fa';
import millify from 'millify';

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

const MyForm = () => {
    return (
        <form>
            <Form.Group className="mb-3">
                <Row className='mb-2'>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Location</option>
                            <option placeholder='select price' >1,000 </option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Home type</option>
                            <option placeholder='select price' >1,000</option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Bedrooms</option>
                            <option placeholder='select price' >1,000</option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Bathrooms</option>
                            <option placeholder='select price' >1,000</option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Min. Price</option>
                            <option placeholder='select price' >1,000</option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Max. Price</option>
                            <option placeholder='select price' >1,000</option>
                            <option placeholder='select price'>2,000</option>
                            <option placeholder='select price' >3,000</option>
                        </Form.Select>
                    </Col>
                </Row>
                <Button className='bg-danger'><HiOutlineSearchCircle style={{ fontSize: '1.2rem', marginBottom: '2px', marginRight: '4px' }} />Search property for sale</Button>
            </Form.Group>
        </form>
    )
}

const Sale = ({ forSale }) => {
    return (
        <div>
            <MyForm />
            <div>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '5px' }}>
                    {forSale.map((property) => {
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



export default Sale
