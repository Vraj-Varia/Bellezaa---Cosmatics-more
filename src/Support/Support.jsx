import React from 'react'
import './Support.css'
import SmallCard from './SmallCard'

const Support = () => {
  return (
    <>
      <div className='adjustEverything'>
        <div className="divider"></div>
        <div className='Support'>
          <h1 className='title'>Support</h1>
          <div className="separator"></div>
          <form action="#" method="get">
            <input type="text" name="name" id="name" placeholder='Name' />
            <input type="text" name="phone" id="phone" placeholder='Phone' />
            <input type="email" name="email" id="email" placeholder='Email' />
            <textarea name="message" id="message" placeholder='Message...'></textarea>
            <button>Contact us</button>
          </form>
        </div>
        
        <div className="divider"></div>

        <div className="needHelp">
          <div className="heading">
            <h1>Need a Little Guidance?</h1>
            <p>Check out what's popular now.</p>
          </div>
          <div className="cards">
            <SmallCard title="Blush" />
            <SmallCard title="Serums" />
            <SmallCard title="Trending on social" />
            <SmallCard title="Sale" />
            <SmallCard title="Clean + Planet aware of Sephora" />
            <SmallCard title="Black Owned Brands" />
            <SmallCard title="Face Products" />
            <SmallCard title="Gifts" />
          </div>
        </div>
        <div className="divider"></div>
      </div>
    </>
  )
}

export default Support