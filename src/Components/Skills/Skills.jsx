
import './Skills.css'
import { skillsArray } from '../../../skillArray'

const Skills = () =>{
    return(
        <div className='skillContainer' id='skills'>
            <h1 className='skill-name'>Skills</h1>
         <div className='skillcon'>
            {skillsArray.map((item, i) =>(
                <div key={i} className='smallcon'>
                   <img src={item.img} alt="Skill_Icon"  className='imageContainer'/>
                   <div className='skillname'>{item.name}</div>
                </div>
            ))}
         </div>
        </div>
    )
}

export default Skills