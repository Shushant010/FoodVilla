// import { createSlice } from "@reduxjs/toolkit";

// const cartSlice= createSlice({
//   name:'cart',
//   initialState:{
//     items:[]
//   },
//   // slice ke andar multiple reducer functions then use reducers
//   reducers :{
//     addItem: (state, action)=>{
//       // it will modify our state based on our action 
//       // directly mutating the store from these reducers


//       // Redux Toolkit->we have to mutate the state whereas in vanilla redux we created a newstate and did not mutate the states directly
//       state.items.push(action.payload);
//     },

//     removeItem: (state)=>{
//       state.items.pop()
//     },

//     clearCart:(state)=>
//     {
//       state.items.length=0;
//       // RTK- either mutate the exisiting state or return a new state
//       // return {items:[]} -> this can be used as well as this [] will replace the state  and the originalState= {items:[]} now!
//     }
//   },
// });

// export const {addItem,removeItem,clearCart}=cartSlice.actions; 

// export default cartSlice.reducer;