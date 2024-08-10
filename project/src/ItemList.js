
import { useState } from "react";
import Iteminfo from "./Iteminfo";
import arrowdown from "./down-arrow.png"
import arrowup from "./upload.png"
const ItemList=({itemdata})=> // humesha props enclose krke hi pass krna vrna kaam khrab ho skta hai
// or upr props do then destructure itemData from the props pura basics sth kro
{
  const {title,itemCards}=itemdata;

  // console.log(title);
  // console.log(itemCards);

  const [showItems,setShowItems]=useState(false);

  const handleClick=(e)=>
  {
    if(showItems)
    {
      setShowItems(false)
    }
    else{
      setShowItems(true)
    }
  }
  
    
  
  
  return(
    <>
    <div  style={{marginBottom:"-20px"}} >
    <div onClick={()=>handleClick()} style={{display:"flex",justifyContent:"space-between",paddingLeft:"5px",width:"60rem",position:"relative",left:"25%", background: "rgba(16, 198, 220, 0.16)",borderRadius:"16px",
boxShadow: "0 4px 30px rgba(0, 0, 0, 0.1)",
backdropFilter: "blur(0px)",
WebkitBackdropFilter: "blur(0px)",
border: "1px solid rgba(16, 198, 220, 0.15)",cursor:"pointer"}} >
  <h4>{title} ({itemCards.length})</h4>
      
  {!showItems?<h4 style={{paddingRight:"10px"}}><img style={{height:"18.5px"}} src={arrowdown}/></h4>:<h4 style={{paddingRight:"14px",paddingBottom:"8px"}}><img style={{height:"12px"}} src={arrowup}/></h4>} 

   </div>

        {  
       showItems?<Iteminfo itemdata={itemCards}/>:null
          
        }
    </div>   
      
    </>
  )
}


export default ItemList