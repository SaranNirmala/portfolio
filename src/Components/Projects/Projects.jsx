
import './Projects.css'
import { projectArray } from '../../../projectArray'
import { Link } from 'react-router-dom'

const Projects = () =>{
    return(
        <div className="proContainer">
             <h1 className='project-name'>Projects</h1>
                <div className="projectContainer">
                {
                   projectArray.map((item, i) => (
                    <div key={i} className='smallbox'>
                     <img src={item.image} alt="Project_Image" className='projectIcon'/>
                     <h3 className='pro-name'>{item.name}</h3>
                    <div className='project-btnCon'>
                    <button className='liveButton'><Link to={item.live} target="_blank" style={{ textDecoration: "none", color: "white" }}>Live</Link></button>
                     <button className='codeButton'><Link to={item.gitHubFront} target="_blank" style={{ textDecoration: "none", color: "white" }}>Code</Link></button>
                    </div>
                     </div>
                   ))
                }
                </div>
        </div>
    )
}

export default Projects