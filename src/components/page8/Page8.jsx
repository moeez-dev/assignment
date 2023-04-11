import React from 'react'
import './page8.css'

import img from './img.jpg'
import { Link } from 'react-router-dom'

const Page8 = () => {
    return (
        <div>
            <img className='img' src={img} alt="" />

            <Link to={'/'} ><button className='button'>move to Home page</button> </Link>

        </div>
    )
}

export default Page8
