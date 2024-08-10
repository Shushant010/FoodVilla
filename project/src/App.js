import React, { useEffect } from "react";
import ReactDOM from "react-dom/client"; 
import { useState } from "react";
import Header from "./Header";
import Body from "./Body";
import About from "./About";
import Contact from "./Contact";
import { Error } from "./Error";
import RestaurantMenu from "./RestaurantMenu";
import { createBrowserRouter, RouterProvider ,Outlet} from "react-router-dom";
import loginName from "./loginName";
import {Provider} from "react-redux";
import appStore from "./appstore";
import Cart from "./cart";
import StoreContextProvider from "./storeContext";
import Loginpopup from "./loginpopup";
import Payment from "./payment";
// two types of import accordinng to the type of export they will get,i.e, either default export or named export!

// const root = ReactDOM.createRoot(document.getElementById("root"));

// now we are gonna assign different context value to header!




export const Title = () => ( // this method is known as named export when multiple exports krne ho from a single js file we use this
  
  <img
    className="logo"
    alt="logo"
    src="https://lh3.googleusercontent.com/Em7AHf7XBH_RtGfCBVXz9RH8SM_pHkj3xPP-yd3cRguY1_Jc8fmqgx6WxnvGVyPV5xs5gL3HCD0FCuv6Xo4CwoY6ak4"
  />
);





const Footer = () => {
    return (
        <>
        <p className="footer">Footer</p>
        
        </>
    );
};
const AppLayout = () => {
  const [userName,setuserName]=useState()
  const [showLogin,setShowLogin]=useState(false)
 
//let's create a mock data
useEffect(()=>
{
  const data={
    name:""
  }
setuserName(data.name);
},[])
  return (
    <>
 
    <StoreContextProvider>
    <Provider store={appStore}>
    <loginName.Provider value={{logUserName:"promoted"}}>
    <loginName.Provider value={{logUserName:userName}}>
      <Header setShowLogin={setShowLogin}/>
    
    </loginName.Provider>
    {showLogin?<Loginpopup setShowLogin={setShowLogin} setuserName={setuserName}/>:null}
      <Outlet/>
      <Footer />
      </loginName.Provider>
      </Provider>
      </StoreContextProvider>
    </>
  );
};

export const appRouter= createBrowserRouter(
  [
    {
      path:"/",
      /*Children routes */
      element: <AppLayout/>,
      children:
      [
        {
          path:"/",
          element:<Body/>
        }
        ,
        {
          path:"/about",
           element: <About/>
        }
        ,
        {
          path:"/contact",
          element: <Contact/>
        }
        ,
        {
          path:"/restaurant/:resId",//: colon lga diya toh uske aage wala dynamically change ho sakta hai
          element:<RestaurantMenu/>
        }
        ,
        {
          path:"/cart",
          element: <Cart/>
        }
        ,
        {
          path:"/payment",
          element:<Payment/>
        }
       
      ]
      ,
      errorElement:<Error/>
    }
    
  ]
)



export default AppLayout