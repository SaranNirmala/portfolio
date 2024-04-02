
import { useState, useRef } from 'react'
import './Contact.css'
import { Link } from 'react-router-dom'
import emailjs from '@emailjs/browser';
import whatsapp from './whatsapp.png'
import github from './github.png'
import linkedin from './linkedin.png'

const Contact = () =>{

    const form=useRef()

const [contact, setContact] = useState({
    name:'',
    email:'',
    number:'',
    message:'',
})

const handleChange = (e) =>{
    const {name, value} = e.target
    setContact({...contact, [name]: value})
}

// const handleSubmit = (e) => {
//     e.preventDefault()
//     setContact(contact)
//     console.log(contact)

//     setContact({
//         name:'',
//         email:'',
//         number:'',
//     })
// }

const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_x9w20or', 'template_ikaculc', form.current, {
        publicKey: 'Mgdr2gB0DDuxzNiCR',
      })
      .then(
        () => {
          console.log('SUCCESS!');
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );

    setContact({
        name:'',
        email:'',
        number:'',
        message:'',
    })
  };


    return(
        <div>
        
        <div className="contactContainer" id='contact'>
            <div className='contactInfo'>
                 <div className='box'><img src='https://ssl.gstatic.com/ui/v1/icons/mail/rfr/gmail.ico' alt='Mail_Icon' className='imag' /> msaranyanirmala@gmail.com</div> 
                 <div className='box'><img src={whatsapp} alt='Call_Icon' className='imag'/>6383359881</div> 
                 <div className='box'><img src={github} alt='GitHub' className='imag'/>GitHub<Link to='https://github.com/SaranNirmala?tab=repositories' target='_blank' className='Links'>Click Here!</Link></div> 
                 <div className='box'><img src={linkedin} alt='linkedIn' className='imag'/>LinkedIn<Link to='https://www.linkedin.com/in/saranya-m-3ab48125b/' target='_blank' className='Links'>Click Me</Link></div> 
                 </div>
            <div className='contactform'>
            <h1 className='contact-name'>Contact Me</h1>
              <form onSubmit={handleSubmit} className='formContainer' ref={form}>
              <input type="text" name='name' value={contact.name} onChange={handleChange} placeholder='Enter your name' /> 
              <input type="email" name='email' value={contact.email} onChange={handleChange} placeholder='Enter your email' /> 
              {/* <input type="number" name='number' value={contact.number} onChange={handleChange} placeholder='Enter your number' />  */}
              <input type="text" name='message' value={contact.message} onChange={handleChange} placeholder='Enter your Message' /> 
        
              <button className='btn'>Send</button>
              </form>
            </div>
        </div>
        </div>
    )
}

export default Contact