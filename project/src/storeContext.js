
import { createContext,useState } from "react";

export const StoreContext=createContext(null);

const StoreContextProvider=(props)=>
{
  const [cartItems,setCartItems]=useState({});
  const[cartarr,setCartArr]=useState([]);


  const addToCart=(itemId)=>
  {
    if(!cartItems[itemId.id]) {
      setCartItems((prev)=>({...prev,[itemId.id]:1})) 
      setCartArr((prev)=>([...prev,{itemId}]))
      console.log(cartarr);
     
    }
    else
    {
      setCartItems((prev)=>({...prev,[itemId.id]:prev[itemId.id]+1}))
    }
  }

const removeFromCart=(itemId)=>{
  if(cartItems[itemId.id]>0)
  setCartItems((prev)=>({...prev,[itemId.id]:prev[itemId.id]-1}))
// we will use splice method here for cartarr -> DONE
  if(cartItems[itemId.id]===1)
 { let arr=cartarr;
  let idx=arr.indexOf(itemId);
  arr.splice(idx-1,1) 
  setCartArr(arr);
 }
}

// we can take reference from the array

const calculateTotal=()=>
{
  let ans=0;
  cartarr.map((item)=>
  {
    if(cartItems[item.itemId.id]>0)
    {
      ans+=cartItems[item.itemId.id]*(item.itemId.price||item.itemId.defaultPrice);
      console.log(ans);
    }
  })
  return ans.toFixed(2);
}



  const contextValue={
      cartItems,
      setCartItems,
      addToCart,
      removeFromCart,
      cartarr,
      calculateTotal,
      setCartArr
  }

  return (
    <StoreContext.Provider value={contextValue}>
      {props.children}
    </StoreContext.Provider>
  )
}

export default StoreContextProvider