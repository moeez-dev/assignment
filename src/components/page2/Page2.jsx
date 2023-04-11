import React from 'react'
import './page2.css'
import { Link } from 'react-router-dom'
import img from './img1.png'

const Page2 = () => {
    return (
        <div className='main2'>

            <div>
                <h3>Cosolvency</h3>
                <p>
                    Cosolvency is a method of solubilization used in physical pharmacy to enhance the solubility of a poorly soluble drug or compound in a given solvent or solution system. This method involves the addition of a second solvent to the primary solvent, which can dissolve both the drug and the primary solvent.

                    The cosolvent acts by altering the solubility of the drug in the primary solvent through various mechanisms, such as changing the polarity of the solvent, increasing the solubilizing capacity of the solvent, or disrupting the crystalline structure of the drug.

                    The choice of cosolvent depends on the nature of the drug and the primary solvent, as well as its compatibility with the formulation. Common cosolvents used in physical pharmacy include ethanol, propylene glycol, polyethylene glycol, and glycerol.

                    Cosolvency is a useful method of solubilization, especially for drugs that are highly lipophilic or hydrophobic, as it can significantly improve their solubility and dissolution rate. However, the use of cosolvents may also increase the risk of toxicity, precipitation, and drug instability, and therefore, careful consideration and optimization of the formulation are necessary.

                </p>
                <img src={img} alt="" />
                <Link to={'/page3'} ><button>move to page 3</button> </Link>
            </div>
        </div>
    )
}

export default Page2
