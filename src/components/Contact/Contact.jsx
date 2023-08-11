import './Contact.css'

const Contact = () => {
  return (
    <section id='contact'>
      <div className="contact_container">
        <div className='subtitle_contact'>
          35,000+ already joined
        </div>
        <h2 className='title_contact'>
          Stay up-to-date with what we’re doing
        </h2>
        <form action="#">
          <input type="text" placeholder='Enter your email address' />
          <button>Contact Us</button>
        </form>
      </div>
    </section>
  )
}

export default Contact