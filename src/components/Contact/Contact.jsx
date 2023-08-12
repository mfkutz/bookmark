import { useState } from 'react';
import './Contact.css'
import { RiErrorWarningFill } from "react-icons/ri";


const Contact = () => {
  const [email, setEmail] = useState('')
  const [isValidEmail, setIsValidEmail] = useState(false)
  const [msgError, setMsgError] = useState(false)
  const [msgSent, setMsgSent] = useState(false)

  const handleEmailChange = (event) => {
    const newEmail = event.target.value
    setEmail(newEmail)
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/
    setIsValidEmail(newEmail === '' || emailPattern.test(newEmail))
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    if (isValidEmail && email !== '') {
      setMsgError(false)
      setMsgSent(true)
      setTimeout(() => {
        setMsgSent(false)
        setEmail('')
      }, 4000)
    } else {
      setMsgError(true)
      setMsgSent(false)
    }
  }

  return (
    <section id='contact'>
      <div className="contact_container">
        <div className='subtitle_contact'>
          35,000+ already joined
        </div>
        <h2 className='title_contact'>
          Stay up-to-date with what we’re doing
        </h2>
        <form onSubmit={handleSubmit}>
          <div className='input_container'>
            <input
              type="text"
              placeholder='Enter your email address'
              className={`input_contact ${msgError ? 'input_error' : ''}`}
              onChange={handleEmailChange}
              value={email}
            />
            <div className='container_error'>
              <div className={`error_email ${msgError ? 'active' : 'disabled'}`}>Whoops, Make sure it's an email</div>
              <div className={`icon_adv ${msgError ? 'active' : 'disabled'} `}><RiErrorWarningFill size='28px' color='hsl(0, 94%, 66%)' /></div>
            </div>
            <div className={`emailSent ${msgSent ? 'active' : 'disabled'}`}>¡Thanks, email has been sent !</div>
          </div>
          <button>Contact Us</button>
        </form>
      </div>
    </section>
  )
}

export default Contact