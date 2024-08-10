// Setting up the cart page
// CSS we will copy baaki ka logic and data extraction aur kha kha kaise use hoga wo hum kr lenge khud se
// TIME-> 3h 

import { useContext } from "react";
import { StoreContext } from "./storeContext";
import { IMG_URL_ITEMLIST } from "./constants";
import Payment from "./payment";
import { Link } from "react-router-dom";



const Cart=()=>{

  const {cartItems,removeFromCart,cartarr,setCartArr,calculateTotal}=useContext(StoreContext)
  // console.log(cartarr)

  return(
    <div className="cart">
      <div className="cart-items">
        <div className="cart-items-title"> 
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>

        <br/>
        <hr/>

        {
          cartarr.map((item)=>{
            if(cartItems[item.itemId.id]>0)
            {
              return(
                <div>
                <div className="cart-items-title cart-items-item">
                  <img src={IMG_URL_ITEMLIST+item.itemId.imageId}/>
                  <p>{item.itemId.name}</p>
                  <p>{item.itemId.price/100||item.itemId.defaultPrice/100}</p>
                  <p>{cartItems[item.itemId.id]}</p>
                  <p>{cartItems[item.itemId.id]*(item.itemId.price/100||item.itemId.defaultPrice/100)}</p>
                  <p className="cross"onClick={()=>removeFromCart(item.itemId)}>x</p>
                </div>
                <hr/>
                </div>

              )
            }
          })}
        
      </div>
      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>₹{calculateTotal()/100}</p>
          </div>
          <hr/>
          <div className="cart-total-details"> 
            <p>Delivery Fee</p>
           {cartarr.length?<p>₹{49}</p>:<p>₹{0}</p>} 
          </div>
          <hr/>
          <div className="cart-total-details">
           <b>Total</b>
         {cartarr.length? <b>₹{calculateTotal()/100+49}</b>: <b>₹{calculateTotal()/100}</b>} 
          </div>
        <Link to="/payment"><button>PROCEED TO CHECKOUT</button></Link> 
         
        </div>
        <div >
          <div className="cart-promocode">
            <p> If you have a promo code, Enter it here</p>
            <div className="cart-promocode-input">
              <input type="text" placeholder="promo code"></input>
              <button>Submit</button>
            </div>
          </div>
        </div>
      </div>
    </div>
        )
}



export default Cart;