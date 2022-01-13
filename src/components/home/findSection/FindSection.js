import React from 'react'
import './findSection.scss'
import { Button } from 'react-bootstrap'
import {AiOutlineFileSearch} from 'react-icons/ai'

const FindSection = () => {
    return (
        <div className="findSection">
            <div className='findBox'>
                <h3 className='findHeading'>
                    FIND YOUR DREAM HOME
                </h3>
                <Button className='mt-2'>Find you future Home<AiOutlineFileSearch className='ms-2' style={{fontSize:'1.5rem'}}/></Button>
            </div>
        </div>
    )
}

export default FindSection
