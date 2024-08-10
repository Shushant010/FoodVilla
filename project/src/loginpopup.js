
import React from 'react'
import Swal from 'sweetalert2'
import { useState } from 'react'

const Loginpopup = ({setShowLogin,setuserName}) => {

    const [name,setName]=useState('')
    const [email,setEmail]=useState('')
    const [password,setPassword]=useState('')
    const [currState,setCurrState] =useState("Sign Up")
  return (
    <div className='login-popup'>
      <form className='login-popup-container'>
        <div className="login-popup-title">
            <h2>{currState}</h2>
            <b onClick={()=>setShowLogin(false)} style={{cursor:"pointer"}}>X</b>
        </div>
        <div className='login-popup-inputs'>
          {currState==="Login"?<></>:<input type="text" placeholder="Your Name" required onChange={(e)=>setName(e.target.value)}></input>}
          <input type='email' placeholder='Your email' required onChange={(e)=>setEmail(e.target.value)}></input>
          <input type='password' placeholder='password' required onChange={(e)=>setPassword(e.target.value)}></input>
        </div>
        <button onClick={(e)=>{
          if(email && password)
          {
            e.preventDefault();
          
          setuserName(name);
          
          
          
          {Swal.fire({
            title: "Signed In",
            text: "You can now continue ordering!",
            icon: "success"
          });
          setShowLogin(false);
        }
        }

         }}>{currState==="Sign Up"?"Create account":"Login"}</button>

        <div className='login-popup-condition'>
            <input type='checkbox' required/>
            <p>By continuing, I agree to the terms of use & privacy policy</p>
        </div>
        { currState==='Login'?
        <p>Create a new account? <span onClick={()=>setCurrState("Sign Up")}>Click here</span></p>
          :
          <p>Already have an account? <span onClick={()=>setCurrState("Login")}>Login here</span></p>
        }
      </form>
    </div>
  )
}

export default Loginpopup