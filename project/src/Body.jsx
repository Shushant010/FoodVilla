import React, { useEffect } from "react";
import restaurantList from "./reslist";
import RestrauntCard from "./RestaurantCard";
import { useState} from "react";
import useRestaurant from "./useRestaurant";
import { Link } from "react-router-dom";
import Headimg from "./headimg";
import Headimg2 from "./headimg2";
import { swiggy_menu_api_URL,IMG_CDN_URL,MENU_ITEM_TYPE_KEY,RESTAURANT_TYPE_KEY } from "./constants";


const Body = () => {
  

let jsondata=[{}];
let restaurantList=[];


let [listofres,setListofRes]=useState([])
let [parentList,setParentList]=useState([]);
let [searchInput,setSearchInput]=useState('')






// FETCHING IS VERY IMPORTANT TO UNDERSTAND -> DONE
  
const fetchData= async ()=>{
  try{
    const response=await fetch('https://foodfire.onrender.com/api/restaurants?lat=21.1702401&lng=72.83106070000001&page_type=DESKTOP_WEB_LISTING')
   
    if(!response.ok) 
    {
      throw new Error('Network response was not ok');
    }
     jsondata= await response.json();
    //  console.log(jsondata);
    console.log(jsondata?.data.cards.find(x=>x.card.card.gridElements).card.card.gridElements.infoWithStyle.restaurants)

    setListofRes(jsondata?.data?.cards.find(x=>x.card?.card?.gridElements)?.card?.card?.gridElements?.infoWithStyle?.restaurants || jsondata?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)
    
    setParentList(jsondata?.data?.cards.find(x=>x.card?.card?.gridElements)?.card?.card?.gridElements?.infoWithStyle?.restaurants || jsondata?.data.cards[1].card.card.gridElements.infoWithStyle.restaurants)

    
  
    // naye API ka use krte hue bhi we have managed to get our restrau cards working! -> sabhi cheeze work kr rhi hai toh it proves that ki API change hone se itna effect nahi pdega on our website...Core concepts will remain same!
   
  }catch(error)
  {
    console.error('Error:',error);
  }
};
  useEffect(()=>
  {
    fetchData()
  },[]);

  
  const handleSearch=()=>
  {
    let filter=parentList.filter(
      (restaurant) => restaurant.info.name.toLowerCase().includes(searchInput.toLowerCase())
     )
 
  setListofRes(filter);
     
  }

  /**<img className="bodyimg"src="https://png.pngtree.com/thumb_back/fw800/background/20240413/pngtree-spaghetti-or-pasta-with-tomato-sauce-and-fresh-green-basil-on-image_15714501.jpg"/> */


  return (<>
  
  
    <Headimg2 />
    
    <div id="." style={{height:"120px"}}></div>
    <div >
    <button className="allbtn" onClick={()=>setListofRes(parentList)}>Show all restaurants</button>
    <button className="topres"onClick={()=>
      {
        let filter=parentList.filter(
          (restaurant)=>restaurant.info.avgRating>=4.5
        )
      
     
      setListofRes(filter);
      }
    }>Top rated restaurants</button>

   {/*search box functionality */}
    <input
    className="searchinput"
     name="SearchBox"
     placeholder="Search restaurants"
    value={searchInput}

     onChange={(e)=>
     {
       console.log(e.target.value);
        setSearchInput(e.target.value);
     }
    }
     onKeyDown={(e)=>{
      if(e.code==="Enter"){ // if e.key will also work galti kya kr rhe the was that onKeyDown aise likhna tha naa ki onkeydown okieeeee
        { console.log('button clicked')}
        handleSearch();
      }
     }
   }
    />
    <button className="searchbtn"  onClick={(e)=>
      {
       handleSearch()
      }
    }
   
    >Search</button>

 
    
    
    <div className="restaurant-list">
      {listofres.map((restaurant) => {
        
        return (
         < Link to={"/restaurant/"+ restaurant?.info?.id} className="linktag">

          <RestrauntCard resdata={restaurant} key={restaurant.info.id} rating={restaurant.info.avgRating}/>

        </Link>
        );
      })}
    </div>
  

    </div>
  
  </>
  )
};

export default Body