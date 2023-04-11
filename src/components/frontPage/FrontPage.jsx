import React from 'react'
import img from '../../assets/download.jpg'
import './frontPage.css'
import { Link } from 'react-router-dom'

const FrontPage = () => {
    return (
        <div className='main'>
            <img src={img} alt="" />
            <div>
                <h4 >Humdard university islamabad campus</h4>
                <br />
                <h4 >
                    Humdard Institute of Pharmaceutical Sciences
                </h4>

            </div>

            <div>
                <h5>Solubilization Assignment </h5>

            </div>

            <div className='info'>
                <p>by</p>

                <div>

                    <h6>Moeez abid<span>Pharm-d 1st semester</span> </h6>
                    <p> CMS id : 3258-2022</p>
                </div>

                <div>

                    <h6>Safiullah <span>Pharm-d 1st semester</span> </h6>
                    <p> CMS id : 3234-2022</p>
                </div>

            </div>

            <Link to='/page1'>
                <button>Move to Page 1</button>
            </Link>

        </div>
    )
}

export default FrontPage
