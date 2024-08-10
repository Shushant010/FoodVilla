import { IMG_URL_ITEMLIST } from "./constants";
import { addItem } from "./cartSlice";
import { useDispatch } from "react-redux";
import Cart from "./cart";
import { useState } from "react";
import { useContext } from "react";
import { StoreContext } from "./storeContext";



const Iteminfo=(props)=>
{
  
  const {itemdata}=props;


 const {cartItems,addToCart,removeFromCart,cartarr,setCartArr}=useContext(StoreContext)


 
  // console.log(itemdata)

  // const dispatch = useDispatch();
  // const handleAddItem=(item)=>{
  //   // Dispatch an action
  //   dispatch(addItem(item)) // whatever u pass in like this under this action it will make an payload object with pizza inside that's why action.payload push kr rhe hi addItem reducer function
  // }

  // maine try kiya ki mai component jo hai wo addButton se hi call kr du but humein humesha yaad rkhna hai ki never ever call a component from outside of return okay vrna useful naii rhega
  // Iska solution ye hai jinpr bhi click ho rha hai unko setCart naam ke state m manage kr lo and Cart m jaakar us data ke sth pange kr lo

  // what I'm thinking is ki why not create an array aur jb bhi like addItem m click hota hai we just push the item.card.info as an object taaki humein cart m jb display krna ho we can just map over it hai na so this can be a good approach!


    // console.log(cartItems);
    console.log(cartarr);

    
  
 
  return (

    <div>
      {itemdata.map((item)=>(
          <>
          {/*we did so that quantity ka access mil jaye */}
            {/* {console.log(item.card.info) } */}
          <div className="Iteminfo" style={{padding:"2px",margin:"2px",borderBottom:"0.5px solid grey",borderRadius:"5px",width:"60rem",position:"relative",left:"25%"}}>
          <div style={{display:"flex",justifyContent:"space-between"}}>
          
          <p style={{marginTop:"4rem"}} className="bold">{item.card.info.name} - Rs.{Math.round(item.card.info.price/100)||Math.round(item.card.info.defaultPrice/100)}</p>

          <img src={IMG_URL_ITEMLIST+item.card.info.imageId} alt="" style={{width:"12rem",marginTop:"0.2rem",borderRadius:"5px"}}/>

          </div>
          <p style={{width:"78%",marginTop:"-5px"}}>{item.card.info.description}</p>
         
          <button className="btn add" style={{position:"relative",left:"85.2%",bottom:"22px"}}
          onClick={()=>addToCart(item.card.info)} 
          >+</button>
           
            <button className="btn minus"style={{position:"relative",left:"86.2%",bottom:"22px"}}
          onClick={()=>removeFromCart(item.card.info)} 
          >-</button>
          {
            cartItems[item.card.info.id]>0? <p className="cntorders" style={{position:"relative",left:"83.2%",bottom:"25px"}}>{cartItems[item.card.info.id]}</p>:<p></p>
          }
         
       
          
          </div>
  
          </>
      ))}
         
       
          </div>
         
    
      )
    

      }
  

    // This data jab humne pehle hi itemList me map use kr liya tha toh yha pr we can get easy destructure projects
    // but the problem here is ki yha hum individual states assign naii kr payenge on each index therefore accordion bn naii payega

  // const {iteminfo}=props;
  // const{name,price,defaultPrice,description,imageId}=iteminfo?.card?.info
  // let pricing= (price||defaultPrice);
  
 
  // return (
  //   <div style={{display:"flex"}}>
  //   <div className="Iteminfo" style={{padding:"2px",margin:"2px",border:"1px solid black",borderRadius:"5px",width:"60rem",position:"relative",left:"25%"}}>
  //     <div style={{display:"flex",justifyContent:"space-between"}}>
      
  //     <p style={{marginTop:"4rem"}} className="bold">{name} - Rs.{Math.round(pricing/100)}</p>
  //     <img src={IMG_URL_ITEMLIST+imageId} alt="" style={{width:"12rem",marginTop:"0.2rem",borderRadius:"5px"}}/>
  //     </div>
  //     <p style={{width:"78%",marginTop:"-5px"}}>{description}</p>
  //     </div>
     
    
      
  //     </div>
  

export default Iteminfo;
