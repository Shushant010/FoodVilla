// this custom hook will return restrau info as well as jitni bhi menu items humein chahiye wo sab

import { useEffect } from "react"
import { useState } from "react";

const useRestaurant=(swiggy_menu_api_URL,resId,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY)=>
{
  const [restaurant,setRestaurant]=useState(null);
  const [menuItems,setMenuItems]=useState([]);

  useEffect(()=>{
    fetchdata()
  },[]);

const fetchdata=async()=>{
  const data= await fetch(swiggy_menu_api_URL+resId);

  const jsondata = await data.json();

  // console.log(jsondata);


 const restaurantdata= jsondata?.data?.cards.
                        map(x=>x.card).
                        find(x=>x&&x.card["@type"]===RESTAURANT_TYPE_KEY)?.card?.info||null
                  
                       

          setRestaurant(restaurantdata);

          console.log(restaurant);


  const menuItemsData= jsondata.data.cards?.find(x=>x.groupedCard)?.groupedCard.cardGroupMap.REGULAR.cards?.
  map(x=>x.card?.card)?.
  filter(x=>x["@type"]==MENU_ITEM_TYPE_KEY)

  console.log(menuItemsData);
  

  //find wala works for only first set of data jo mil jaye if u wanna deep dive into the data toh filter use kro phir wo saare data jinme menu item key match kr rhi hogi wo sab dega in return!
setMenuItems(menuItemsData);



}




return [restaurant,menuItems];
}
export default useRestaurant