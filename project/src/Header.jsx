

import { useEffect, useState } from "react";
import React from "react";
import { Title } from "./App";
import { Link } from "react-router-dom";
import useOnlineStatus from "./useOnlineStatus";
import loginName from "./loginName";
import { useContext } from "react"; 
import { useSelector } from "react-redux";
import Loginpopup from "./loginpopup";
const Header = ({setShowLogin}) => {
  // Hooks always inside the functional component and on the top.
  const [logValue,setlogValue]=useState('Login')

  console.log("Header rendered")

  const data=useContext(loginName);
  console.log(data)


  // if no dependency array useEffect is called on every render of the component!

  // if the dependency array is empty then useEffect is called on the initial render only

  // if the dependency array has something present inside it then it only comes into effect when the dependency changes

  // for example if we change the state of logValue then according to react at every state change the component re renders therefore useEffect bhi baar baar chalega! 

  // useEffect(()=> console.log("useEffect called"),[logValue]);
  // const handleLog = (e)=>{
  //   if(logValue=='Login')
  //   {
  //     setlogValue('Logout');
  //   }
  //   else{
  //     setlogValue('Login');
  //   }
  // }
  const onlineStatus=useOnlineStatus();

    //READING THE STORE
    // Subscribing to the store using a Selector
    // const cartItems= useSelector((store)=>store.cart.items);
    // console.log(cartItems)






  return (
 <>

     <div className="header">
    <div className="head">
      <Title />
      <div className="nav-items">
        <ul>
          <li>{onlineStatus?"🟢":"🔴"}</li>
          <li>
            <Link to="/" className="linktag">Home</Link>
          </li>
          <li>
          <Link to="/about" className="linktag">About</Link>
          </li>
          <li>
          <Link to="/contact"  className="linktag">Contact</Link>
          </li>
          <li> <Link to="/cart"  className="linktag">Cart</Link></li>
          <li><button className="log" style={{  color:"white",border:"none",cursor:"pointer", fontSize:"1rem"}} onClick={()=>setShowLogin(true)}>Sign In</button></li>
          <li>{data.logUserName}</li> 
         {/* yha pr data.loguserName tbhi display ho jb create account pr click ho aise kr dena kuch kaam toh done ho jayega okieee na */}
        </ul>
      </div>
      
     
    </div>
   
    </div>
    </>
  );
};
export default Header;