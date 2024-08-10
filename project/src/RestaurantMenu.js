

// we will use dynamic routing which uniquely shows menu from each restaurant according to the restaurant IDs

import ItemList from "./ItemList";
import { useParams } from "react-router-dom";
import useRestaurant from "./useRestaurant";
import { swiggy_menu_api_URL,IMG_CDN_URL,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY } from "./constants";

//IMPORTANT CONCEPT
const RestaurantMenu= ()=>
{

  const {resId}=useParams();
  const [restaurant,menuItems]=useRestaurant(swiggy_menu_api_URL,resId,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY)




  return(
    <div className="menu">

      <div className="upper">
        
      <img src={IMG_CDN_URL+ restaurant?.cloudinaryImageId}/>
      

      <div className="lower">
      <h2>{restaurant?.name}</h2>
      <div className="lowerinfo">
       <p>{restaurant?.avgRating}⭐</p>
       <p>{restaurant?.sla.lastMileTravel} km</p>
       <p>{restaurant?.sla.deliveryTime} minutes </p>
       </div>
      </div>
      
      </div>
      
      
        <div>
        {menuItems.map((item)=>{
          return (
            <div className="menucomp">
              {/* we have now an array of objects jha pr humare pas title itemcards and @type hai now we can extract the itemCards array and display it */}
              <ItemList itemdata={item}/>
              {/* vo item jo ki element of the array hai it is basically an object toh hum jaise hi suppose kro 0th index pr phunche pura ka pura object ka data pass kr do */}
          </div>
          )

        } )}</div>
      
    </div>
  )
}

export default RestaurantMenu