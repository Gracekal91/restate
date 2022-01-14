import { Form, Row, Col, Button } from 'react-bootstrap'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { useState } from 'react'


const RentForm = ({ forRent }) => {

    let minPrices = [1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 9000, 10000];
    let maxPrices = [1000, 1500, 2000, 3000, 4000, 5000, 6000, 8000, 9000, 10000, 20000, 30000, 4000, 50000];
    let baths = forRent.map((item) => { return item.baths });
    let numberOfBaths = [...new Set(baths)].sort();

    let rooms = forRent.map((item) => { return item.rooms });
    let numberOfBeds = [...new Set(rooms)].sort();

    let location1 = forRent.map((item) => {
        return item.location[2].name
    })

    console.log(location1)

    const [minPrice, setMinPrice] = useState()
    const [maxPrice, setMaxPrice] = useState()
    const [bedRoom, setBedRoom] = useState()
    const [bathRoom, setBathRoom] = useState()
    //Handle multiple inputs on submits

    const initialValues = Object.freeze({
        minPrice: '',
        maxPrice: '',
        bedRoom: '',
        bathRoom: ''
    });

    const [formData, setFormData] = useState(initialValues)

    const handleForm = (e) => {
        setFormData({
            ...formData, [e.target.name]: e.target.value.trim()
        })
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }

    return (
        <form>
            <div className="mb-3">
                <Row className='mb-2'>
                    <Col>
                        <select className='form-control'>
                            <option selected disabled>Location</option>
                            {forRent.map((item) => {
                                return <option placeholder='select price' >{item.price}</option>
                            })}
                        </select>
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
                        <select className='form-control' name='bedRoom' onChange={handleForm} value={bedRoom}>
                            <option selected>Bedrooms</option>
                            {numberOfBeds.map((item) => {
                                return <option selected>{item}</option>
                            })}

                        </select>
                    </Col>
                </Row>
                <Row className='mb-2'>
                    <Col>
                        <select className='form-control' name='bathRoom' onChange={handleForm} value={bathRoom}>
                            <option selected>Bathroom</option>
                            {numberOfBaths.map((item) => {
                                return <option selected>{item}</option>
                            })}
                        </select>
                    </Col>
                    <Col>
                        <select className='form-control' name='minPrice' onChange={handleForm} value={minPrice}>
                            <option placeholder='select price' selected disabled>Min. Price</option>
                            {minPrices.map((item) => {
                                return <option placeholder='select price' >R {item}</option>
                            })}
                        </select>
                    </Col>
                    <Col>
                        <select className='form-control' name='maxPrice' onChange={handleForm} value={maxPrice}>
                            <option selected>Max price</option>
                            {maxPrices.map((item) => {
                                return <option placeholder='select price' >R {item}</option>
                            })}
                        </select>
                    </Col>
                </Row>
                <Button stype='submit' onClick={handleSubmit}><HiOutlineSearchCircle style={{ fontSize: '1.2rem', marginBottom: '2px', marginRight: '4px' }} />Search property for rent</Button>
            </div>
        </form>
    )
}


export default RentForm