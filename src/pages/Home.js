import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/background.jpeg'
import '../styles/Home.css'

function Home() {
  return (
    <div className='home' style={{ backgroundImage: `url(${BannerImage})`}} >
      <div className="headerContainer">
        <h1>Sophie's Cupcakes</h1>
        <p>Indulge in Happiness, One Cupcake at a Time!</p>
        <Link to="/menu">
        <button> Order Now </button>
        </Link>
      </div>
    </div>
  )
}

export default Home
