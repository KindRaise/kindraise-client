import React, { useState } from 'react'
import './NpoSignup.css'
import { BsEye, BsEyeSlash } from 'react-icons/bs'
import toast, { Toaster } from 'react-hot-toast'
import axios from 'axios'

const NpoSignup = ({setActiveSignupPage}) => {
  const [organizationName, setOrganizationName] = useState('')
  const [registrationNumber, setRegistrationNumber] = useState('')
  const [phoneNumber, setPhoneNumber] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
 const [emailerror, setEmailError] = useState('')
 const [passwordErrorlow, setPasswordErrorLow] = useState(false);
 const [passwordCheck, setPasswordCheck] = useState(false)
const [passwordErrorUpper, setPasswordErrorUpper] = useState(false);
const [passwordErrorNumber, setPasswordErrorNumber] = useState(false);
const [passwordErrorSymbol, setPasswordErrorSymbol] = useState(false);
const formData = {
  organizationName,
  registrationNumber,
  phoneNumber,
  email,
  password,
}
console.log(formData)

const [show, setShow]= useState(false)



// const containsLowercase = (input) => {
//   // Check if the input string contains at least one lowercase character
//   return /[a-z]/.test(input);
// };

// const containsUpperrcase = (input) => {
//   // Check if the input string contains at least one lowercase character
//   return /[A-Z]/.test(input);
// };

// const containsNumber = (input) => {
//   // Check if the input string contains at least one number
//   return /\d/.test(input);
// };

// const containsSymbol = (input) => {
//   // Check if the input string contains at least one symbol (special character)
//   return /[!@#$%^&*()_+{}\[\]:;<>,.?~\\/-]/.test(input);
// };

// const validateEmail = (input) => {
//   // Regular expression for basic email validation
//   const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//   return emailRegex.test(input);
// };


// const handlePassword = (e) => {
//   const newData = e.target.value;
//   setPassword(newData);

//   if (newData.trim() === "") {
//     toast.error("Password is required");
//     setPasswordCheck(false);
//   }
//   if (newData.length > 0) {
//     setPasswordCheck(true);
//   }
//   if (!containsLowercase(newData)) {
//     setPasswordErrorLow(true);
//   } else {
//     setPasswordErrorLow(false);
//   }
//   if (!containsUpperrcase(newData)) {
//     setPasswordErrorUpper(true);
//   } else {
//     setPasswordErrorUpper(false);
//   }
//   if (!containsNumber(newData)) {
//     setPasswordErrorNumber(true);
//   } else {
//     setPasswordErrorNumber(false);
//   }
//   if (!containsSymbol(newData)) {
//     setPasswordErrorSymbol(true);
//   } else {
//     setPasswordErrorSymbol(false);
//   }
// };

const handleBtn = () => {
  if (!organizationName ||!registrationNumber ||!phoneNumber || !password || !email) {
    // alert("details is required");
    toast.error("details is required");
  } else {
    const url = "https://kindraise.onrender.com/api/v1/sign-up";
    const data = {
      organizationName,
      registrationNumber,
      phoneNumber,
      email,
      password,
    }
    axios
      .post(url, data)
      .then((res) => {
        console.log(res?.data?.message);
        toast.success(res?.data?.message);
        // setActiveSignupPage("D")
      })
      .catch((err) => {
        console.log(err)
        toast.error(err)
      });
    // Nav('/login')
  }
};

  return (
    <>
    <div className='npoSignUpBody'>
      <div className='signupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/')}> Sign in</span>
      </div>
      <div className='indSignupInputBox'>
        <h1 className='indSignupQusBox'>Tell us about your self</h1>
        <div className='indInputHoldBox'>
          Non-profit Name
          <input type="text" onChange={(e)=>setOrganizationName(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          RC Number
          <input type="text" onChange={(e)=>setRegistrationNumber(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Email Address
          <input type="email" onChange={(e)=>setEmail(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Phone Number
          <input type="text" onChange={(e)=>setPhoneNumber(e.target.value)}/>
        </div>
        <div className='indInputHoldBox'>
          Password
          <div className='signupInputClone'>
            <input type={show ? 'text': 'password'} onChange={(e)=>setPassword(e.target.value)}/> 
            {
              show ? 
              <BsEyeSlash cursor="pointer" onClick={()=>setShow(false)}/>:
              <BsEye cursor="pointer" onClick={()=>setShow(true)}/>
            }
          </div>
        </div>
        <div className='signupPassHintBox'>
          Your Password must have:
          <span>At least 8 characters, <span style={passwordErrorUpper?{color: "red"}:{color: "green"}}>1 uppercase letter</span>, <span style={passwordErrorlow?{color: "red"}:{color: "green"}}>1 lowercase letter</span> and <span style={passwordErrorNumber? {color: "red"}:{color:"green"}}>1 number</span></span>
        </div>
        <div className='TermsBox'>
          <input type="checkbox" name="" id="" /> I have read and agree to the Terms and Use and Private Policy
        </div>
        <button className='signupIndCreateBtn' onClick={handleBtn}>
          Create Account
        </button>
        
      </div>
      <div className='mediaSignupLoginBox'>
        Already have an account?<span onClick={()=>Nav('/login')}  style={{ marginLeft: '10px', color: '#690896', cursor: 'pointer' }}>Sign in</span>
      </div>
    </div>
    <Toaster/>
    </>
  )
}

export default NpoSignup