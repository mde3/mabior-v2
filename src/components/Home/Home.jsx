import React from 'react'
import './home.css'
import mabior from '../../assets/mabior.png'

const Home = () => {
  return (
    <section className="home section" id="home">
      <div className="home-container container grid">
        <p className="home-subtitle">Hi, welcome to my portfolio, I'm</p>
        <div className="home-image-container">
          <img src={mabior} alt="logo" className="home-image" />
        </div>
        <p className="home-desc">
          A front-end developer based in Nairobi – Kenya,{' '}
          <span className="home-span">passionate about building user-friendly <span className="and">&</span> responsive projects.</span>
        </p>
      </div>
      <div className="line"></div>
    </section>
  )
}

export default Home