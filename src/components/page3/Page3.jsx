import React from 'react'
import { Link } from 'react-router-dom'
import './page3.css'
import img from './img.jpg'

const Page3 = () => {
    return (
        <div className='main3'>

            <div>
                <h3>micellization</h3>
                <p>
                    Micellization is a method of solubilization used in physical pharmacy to enhance the solubility of poorly soluble drugs or compounds in a given solvent or solution system. This method involves the use of surfactants, which are molecules that have both hydrophilic and hydrophobic properties.

                    In a solution, surfactants can form micelles, which are aggregates of surfactant molecules arranged in a spherical or cylindrical structure. The hydrophobic tails of the surfactant molecules are oriented towards the center of the micelle, while the hydrophilic heads are oriented towards the outer surface of the micelle.

                    When a poorly soluble drug or compound is added to a micellar solution, it can be solubilized in the hydrophobic core of the micelle. The solubility of the drug in the micellar solution can be further improved by adjusting the composition and properties of the surfactant and the solution.

                    Micellization is a useful method of solubilization for drugs that are highly lipophilic or hydrophobic, as it can significantly improve their solubility and dissolution rate. It is commonly used in the formulation of oral and topical drugs, as well as in drug delivery systems such as liposomes and emulsions. However, the use of surfactants in pharmaceutical formulations may also increase the risk of toxicity and irritation, and therefore, careful consideration and optimization of the formulation are necessary.




                </p>
                <img src={img} alt="" />
                <Link to={'/page4'} ><button>move to page 4</button> </Link>
            </div>
        </div>
    )
}

export default Page3
