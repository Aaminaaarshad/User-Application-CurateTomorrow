import React from 'react'
import './Thankyou.css'
import img from '../../assets/logo/fori-company-white.png'

const Thankyou = () => {
  return (
    <div className='Thankyou'>
      <img src={img} alt="" />
      <h2>Thank You!</h2>
      <h6>An email has been sent to you with follow up steps and further communication.</h6>
      <small>(If your application is rejected for any reason, you will receive a full refund)</small>

    </div>
  )
}

export default Thankyou