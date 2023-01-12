import React from 'react'
import './contact.css'
import {AiOutlineGithub} from 'react-icons/ai'
import {AiOutlineTwitter} from 'react-icons/ai'
import {AiFillLinkedin} from 'react-icons/ai'


const Contact = () => {
  return (
    <section className="contact section" id="contact">
      <div className="container-container container">
        <h1 className="contact-title">Get in Touch</h1>
        <p className="contact-desc">Have a project in mind? Let's talk. Reach me at my socials below, looking forward to working together!</p>

        <div className="contact-mail">
          <a href="mailto:mabiorduom5@gmail.com" target="_blank" className="contact-link">mabiorduom5@gmail.com</a>
        </div>

        <div className="contact-social">
          <a href="https://github.com/mde3" target="_blank" className="container-link-bottom">
            <p className="contact_p">Github</p><AiOutlineGithub className="contact-icon" />
          </a>
          <a href="https://twitter.com/mabiorduom" target="_blank" className="container-link-bottom">
            <p className="contact_p">Twitter</p><AiOutlineTwitter className="contact-icon" />
          </a>
          <a href="https://www.linkedin.com/in/mabior-duom" target="_blank" className="container-link-bottom">
            <p className="contact_p">Linkedin</p><AiFillLinkedin className="contact-icon" />
          </a>
        </div>

      </div>
    </section>
  )
}

export default Contact