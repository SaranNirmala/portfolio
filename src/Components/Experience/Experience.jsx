/* eslint-disable no-unused-vars */

import './Experience.css'

import { ExperienceArray } from '../../../projectArray'
import { Link } from 'react-router-dom'
import { useState } from 'react'

const Experience = () =>{

    const [showDetails, setShowDetails] = useState(ExperienceArray)

    const [filterData, setFilterData] = useState(false)

    const handleClick = (index) => {
//    const data =showDetails.find((item) => item.id === id)
    setShowDetails(index+1)

    setFilterData(!filterData)
    // alert(index)
    }

    
    
    return (
        <div className='experienceContainer'> 
        <h1 className='exp-name'>Experience</h1>
           <div className='expContainer'>
            {
                ExperienceArray.map((item, index) =>(
                    <div key={index} className='expBox' onClick={() => handleClick(index)}>
                     <div className='expdesig'>
                     <h3>{item.companyName}</h3>
                     <h6>{item.designation}</h6>
                     </div>
                     {/* <p>{item.shortDescription}</p> */}
                    
                    { filterData && (item.id == showDetails) ? <div  className='detail'><i className="fa fa-chevron-circle-up" aria-hidden="true" ></i>
                    <div className='dropBtn'>
                    {item.details}</div>
                    </div>  
                    :<div className='expBtn' >
                    <i className="fa fa-chevron-circle-down" aria-hidden="true"></i>
                    </div> }                     
                    
                    </div>
                ))
            }
           </div>
        </div>
    )
}

export default Experience