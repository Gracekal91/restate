import { Form, Row, Col, Button } from 'react-bootstrap'
import { HiOutlineSearchCircle } from 'react-icons/hi'
import { useState } from 'react'


const SaleForm = ({ forSale }) => {

    let minPrices = [150000, 200000, 300000, 400000, 500000, 600000, 800000, 900000, 1000000, 200000];
    let maxPrices = [200000, 300000, 400000, 500000, 600000, 800000, 900000, 1000000, 200000, 300000, 1000000, 2000000];

    let baths = forSale.map((item) => { return item.baths });
    let numberOfBaths = [...new Set(baths)].sort();

    let rooms = forSale.map((item) => { return item.rooms });
    let numberOfBeds = [...new Set(rooms)].sort();

    let location1 = forSale.map((item) => {
        return item.location[2].name
    })

    let cities = [...new Set(location1)]

    let furnishState = forSale.map((item) => {
        return item.furnishingStatus
    })

    let status = [...new Set(furnishState)]


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
                            {cities.map((item) => {
                                return <option placeholder='select price' >{item}</option>
                            })}
                        </select>
                    </Col>
                    <Col>
                        <select className='form-control'>
                            <option selected disabled>Furnish State</option>
                            {status.map((item) => {
                                return <option >{item}</option>
                            })}
                        </select>
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
                <Button stype='submit' className='bg-danger' onClick={handleSubmit}><HiOutlineSearchCircle style={{ fontSize: '1.2rem', marginBottom: '2px', marginRight: '4px' }} />Search property for rent</Button>
            </div>
        </form>
    )
}

export default SaleForm