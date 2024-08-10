
import loginName from "./loginName";
import { useContext } from "react";


const RestrauntCard = (props)=>{
// How to remember the props in the right way....like tum component render call kro saath m argument and uski value do saath mai....us function m props receive krega sb kuch as a object 
  // const resdata=props.resdata;
  // destructuring the props object
  const {resdata}=props; // you can't access the key it is  just for uniquely identifying which id cards have already been displayed and keep a track of it!
  
  const{name,
  cloudinaryImageId, 
  cuisines,
  sla,
  costForTwoString,
  avgRating,
} = resdata?.info


 const data=useContext(loginName);
 const {logUserName,logo}=data;
  return (
    <div className="card">
      <p style={{color:"grey", margin:"auto"}}>{logo}</p>
      <img
        src={
          "https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/"+cloudinaryImageId
        }
      />
      <div className="descard">
      <div className="ratings">
        <p className="cardcomp">{name}</p> 
        <p className="cardcomp" style={avgRating > 3 ? {color:"green"}:{color:"red"} }>{avgRating}</p>
      </div>
      <p className="cardcomp">{costForTwoString}</p>
      <p className="cardcomp">{cuisines.join(", ")}</p>
      
      <div className="abc"> 
       <p className="cardcomp">{sla.lastMileTravel}km </p>
       <p className="cardcomp">{sla.deliveryTime}minutes </p>
       
      </div>
    
    </div>
    </div>
  );
}

export default RestrauntCard