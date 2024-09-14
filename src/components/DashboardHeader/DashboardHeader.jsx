import React from 'react'
import './DashboardHeader.css'
import Logo from '../../assets/logo.svg'

const DashboardHeader = () => {
  return (
    <div className='fundHeaderBody'>
      <div className='fundHeaderWrapper'>
        <div className='fundHeadLogo'>
          <img src={Logo} alt="" />
        </div>
        <div className='fundHeadNav'>
          <ul>
            <li>Product</li>
            <li>Resources</li>
          </ul>
        </div>
        <div className='fundHeadBtnSide'>
          <button className='headLoginBtn'>Login</button>
          <button className='headSignUpBtn'>sign up</button>
        </div>
      </div>
    </div>
  )
}

export default DashboardHeader