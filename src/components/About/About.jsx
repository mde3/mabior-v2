import React from 'react'
import './about.css'
import { AiOutlineDownload } from 'react-icons/ai'
import cv from '../../assets/Mabior_Duom.pdf'

const About = () => {
  return (
    <section className="about section" id="about">
      <div className="about-container container">
          <div className="about-content">
            <h3 className="about-title">More about me</h3>
            <p className="about-desc">Hello! I'm Mabior, a front-end developer with over two years of experience in the industry having a solid grasp of responsive design, delivering ideal user experience (UX) and user interface (UI).</p>
            <p className="about-desc">I've developed my talents working on a range of projects, from static websites to complex single-page applications, and work well in both collaborative and independent environments.</p>
            <p className="about-desc about-desc-mb">I am always looking to learn, up for a challenge, and excited to bring my skills and experience to a new team to help create innovative and effective solutions for our clients.</p>
            <a href={cv} target="_blank" rel="noopener noreferrer">
                <button className="button about-button">Download CV <AiOutlineDownload className="download-icon" /></button>
            </a>
          </div>
          <div className="about-txt">
            <div className="about-txt-center">
                <h3 className="about-txt-h3">Who am I?</h3>
            </div>
          </div>
      </div>
    </section>
  )
}

export default About