import React from 'react'
import './PaymentDetails.css'

const PaymentDetails = ({setEmail,setPay,setName,setMessage}) => {

  function payKorapay() {
    window.Korapay.initialize({
      key: import.meta.env.VITE_Public_Key,
      reference: `hi_jack_${Date.now()}`,
      amount: total,
      currency: "NGN",
      customer: {
        name: user.userName,
        email: user.email,
      },
      // notification_url: ""
    });
  }

  
  return (
    <div className='PaymentDetailsBody'>
      <div className='amountHeader'>
        <h3>Show your Support</h3>
        <div onClick={()=>setPay(false)}>X</div>
      </div>
      <div className='payDetailsWrapper'>
        <h4>Add a Publice Message</h4>
        <input type="text" placeholder='Name' onChange={(e)=>setName(e.target.value)}/>
        <input type="text" placeholder='email' onChange={(e)=>setEmail(e.target.value.toLowerCase())}/>
        <textarea name="" id="" placeholder='Message' onChange={(e)=>setMessage(e.target.value)}/>
        <div>
          <button onClick={payKorapay}>Continue</button>
        </div>
      </div>
    </div>
  )
}

export default PaymentDetails