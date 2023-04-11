import React from 'react'
import './page4.css'
import img from './img.jpg'
import { Link } from 'react-router-dom'

const Page4 = () => {
    return (
        <div className='main3'>

            <div>
                <h3>complexation</h3>
                <p>Complexation is a method of solubilization used in physical pharmacy to enhance the solubility of poorly soluble drugs or compounds in a given solvent or solution system. This method involves the use of complexing agents, which are molecules that can form stable complexes with the drug or compound.

                    The complexing agent can be either an organic or inorganic molecule that has a structure that allows it to interact with the drug molecule through electrostatic, hydrogen bonding, or Van der Waals interactions. When a complexing agent is added to a solution containing a poorly soluble drug, it can form a stable complex with the drug, thereby increasing its solubility and bioavailability.

                    Some of the most commonly used complexing agents in physical pharmacy include cyclodextrins, polyelectrolytes, and polymers. Cyclodextrins are cyclic oligosaccharides that have a hydrophobic interior and a hydrophilic exterior. When a poorly soluble drug is added to a cyclodextrin solution, the drug molecule can be encapsulated inside the hydrophobic cavity of the cyclodextrin, thereby increasing its solubility.

                    Polyelectrolytes and polymers can also form stable complexes with drugs through electrostatic or hydrogen bonding interactions. These interactions can increase the solubility of the drug by stabilizing its structure and preventing it from precipitating out of solution.

                    Complexation is a useful method of solubilization for drugs that are poorly soluble in water and other solvents. However, the use of complexing agents may also increase the risk of toxicity and side effects, and therefore, careful consideration and optimization of the formulation are necessary.


                </p>
                <img src={img} alt="" />
                <Link to={'/page5'} ><button>move to page 5</button> </Link>
            </div>
        </div>
    )
}

export default Page4
