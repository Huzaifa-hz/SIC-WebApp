import React from 'react'
import './Collaboration.css'
import Wadhwani from '../assets/WF-Logo-Color.png'
import EcellIITM from '../assets/e-cell_logo_wt_captions.png'

function Collaboration() {
  return (
    <div className='collabs-cotainer'>

        <h5 className='txt'>In Collaboration With</h5>
        <img src={Wadhwani} alt="  " className='collab wadhwani'/>
        <img src={EcellIITM} alt="  " className='collab eCell'/>


    </div>
  )
}

export default Collaboration
