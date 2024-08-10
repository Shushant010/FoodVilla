
// we are creating a useOnline status hook here
import React,{useEffect, useState} from "react"

const useOnlineStatus=()=>
{
  const [connection,setConnection]=useState(true);

  useEffect(()=>{
    window.addEventListener("online",()=>
    {setConnection(true)})
    
    
   window.addEventListener("offline",()=>
      {setConnection(false)})
  ;
   } ,[]);

 // window.addEventListener mai online/offline aur sth mai ek call back function
   
  return connection;
}

export default useOnlineStatus