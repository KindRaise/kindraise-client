import React from 'react'
import './Track.css'
import UserStateLocation from '../../components/UserLocation/UserLocation'
// import ProgressBar from '../components/ProgressBar/ProgressBar'

const Track = () => {
  return (
    <div className='trackBody'>
      <h2 className="pageName">Track</h2>
      <UserStateLocation/>
      {/* <UserLocation/> */}
    </div>
  )
}

export default Track