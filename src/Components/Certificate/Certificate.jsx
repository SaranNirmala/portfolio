
import './Certificate.css'
import { certificates } from '../../../skillArray'

const Certificate = () => {
    return(
        <div className="certificateContainer">
           {
            certificates.map((item, i) =>(
                    <img key={i} src={item.img} alt="Certificate_image" className='imageBox'/>  
            ))
           }
        </div>
    )
}


export default Certificate