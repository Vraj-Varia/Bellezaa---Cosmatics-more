import React from 'react'
import './Home.css'
import bgVideo from '../assets/video.mp4'


const Home = () => {
  return (
    <div className='Home'>

        {/* <video autoplay loop muted playsInline className='background-clip'>
          <source src={bgVideo} type='video/mp4'></source>
        </video> */}

        <div className="text">
            <h1>Make your Skin Glow</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt, explicabo?</p>
        </div>
        <div className="button">
            <button>DOCUMENTATION</button>
            <button>LEARN MORE</button>
        </div>
    </div>
  )
}

export default Home