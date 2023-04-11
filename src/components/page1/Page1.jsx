import React from 'react'
import './page1.css'
import { Link } from 'react-router-dom'

const Page1 = () => {
    return (
        <div className='main1'>
            <div className='sub'>

                <h4>Solubilization Definition</h4>
                <p>
                    In physical pharmacy, solubilization refers to the process of increasing the solubility of a poorly soluble drug or compound in a given solvent or solution system. It is a crucial step in the formulation of drugs as it can greatly affect their bioavailability and therapeutic efficacy. The ultimate goal of solubilization in physical pharmacy is to produce a stable and effective formulation of the drug or compound that can be readily absorbed and utilized by the body.
                </p>
            </div>

            <div className='sub'>
                <h6>methods used for Solubilization</h6>
                <br />
                <p>These methods are commonly used in the pharmaceutical industry to improve the bioavailability and efficacy of drugs.</p>
                <br />
                <ol>
                    <li>Cosolvency</li>
                    <li>miccelization</li>
                    <li>complexation</li>
                    <li>particle size reduction</li>
                    <li>pH adjustment</li>
                    <li>Hydrotropy</li>
                </ol>
                <Link to={'/page2'} ><button>move to page 2</button> </Link>

            </div>


        </div>
    )
}

export default Page1
