import React, { useContext } from 'react'
import StripeCheckout from 'react-stripe-checkout';
import { StoreContext } from './storeContext';
import { Link } from 'react-router-dom';

const Payment=()=>{

  const {calculateTotal}=useContext(StoreContext)
  const onToken=(token)=>{
    console.log(token)
  }


  return (
    // ...
    <>
    <div className='payment' style={{margin:"25rem 43rem"}}>
    <StripeCheckout
      token={onToken}
      stripeKey="pk_test_51PjGcjHaQLHqKaJiDAvKLZ9eVoRmkyfypdJiISJLb8GVjftsESavHex4OahvW58eWi5tICD4wij9O19WcRcGWWnJ00QfZCkZBt"
      name="Payment"
      currency='INR'
      amount={calculateTotal()+4900}
    />
    </div>
   <Link to="/"> <button className='returnbtn'>Return to Home page</button></Link>
    </>
  )
}
export default Payment