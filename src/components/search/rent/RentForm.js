import { Form, Row, Col, Button } from 'react-bootstrap'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { useState } from 'react'
import millify from 'millify'


const RentForm = ({ forRent }) => {

    let minPrices = [1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 9000, 10000];
    let maxPrices = [1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 9000, 10000, 20000, 30000, 4000, 50000];

    const [minPrice, setMinPrice] = useState(1000);
    const [maxPrice, setMaxPrice] = useState('any');


    const update = (e) => {
        e.preventDefault();
        console.log(maxPrice);
    }

    console.log(maxPrice);

    return (
        <form onSubmit={update}>
            <Form.Group className="mb-3">
                <Row className='mb-2'>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Location</option>
                            {forRent.map((item) => {
                                return <option placeholder='select price' >{item.price}</option>
                            })}

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
                            <option placeholder='select price' value=''> </option>
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
                            {minPrices.map((item) => {
                                return <option placeholder='select price' >R {item}</option>
                            })}
                        </Form.Select>
                    </Col>
                    <Col>
                        <Form.Select>
                            <option placeholder='select price' selected disabled>Max. Price</option>
                            {maxPrices.map((item) => {
                                return <option placeholder='select price'
                                    value={maxPrice}
                                    onSelect={(e) => setMaxPrice({ maxPrice: e.target.value })}>R {item}</option>
                            })}
                        </Form.Select>
                    </Col>
                </Row>
                <Button stype='submit'><HiOutlineSearchCircle style={{ fontSize: '1.2rem', marginBottom: '2px', marginRight: '4px' }} />Search property for rent</Button>
            </Form.Group>
        </form>
    )
}


export default RentForm