import React from 'react'
import './Board.css'
import Sidebar from './sidebar'
import Topbar from './Topbar'

const Board = () => {
  return (
    <div className='board'>
      <div className="left">
        <Sidebar />
      </div>
      <div className="right">
        <Topbar />
      </div>
    </div>
  )
}

export default Board