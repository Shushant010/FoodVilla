 

// // we will create a class based component here for about us page-> just good for interview and yaha par React Life cycle sbse important hai samajhna -> mostly theoretical

// import React from "react";
// import { json } from "react-router-dom";
// import loginName from "./loginName";
// class AboutClass extends React.Component{
// // whenever a class loads or can say the instance of the class is called sbse pehle constructor is called then render is called!
//     constructor(props){
//       super(props);
//       console.log(props);

//       console.log("Child Constructor")
//       // this.state={ // this.state is basically a bag which contains all the local state variables!
//       //   count:0,
//       //   count2:0

//       this.state={
//         userInfo:{
//           name:"dummy",
//           location:"XYZ",
//           avatar_url:""
//         }
//       }
//       }
      
     
    
//    async componentDidMount(){
//       console.log(" child mounted")

//       const data= await fetch("https://api.github.com/users/akshaymarch7");
//       const jsondata= await data.json()
//       console.log(jsondata)

//       this.setState({
//         userInfo:jsondata
//       })
//     }
//     componentDidUpdate(){
//       console.log("Component will be updated")
//     }

//     componentWillUnmount(){
//       console.log("Page changed and component umounted");
//     }

//   render(){
//      // const {name} = this.props
//     const {userInfo}=this.state // yha pr sbse pehle jitne states present hai this.state mai unhe destructure kr liya
//      const {name,location,avatar_url}= userInfo // then yha pr vo jo state hai jo ki ek object hai usko destructure kr liya

//     //  const{count,count2}=this.state -> ye wala this.state destructuring krta h kitne number of states hai this.state mai
//     return(
//       <div style={{border: "1px solid black"}}>
//         {console.log("Child render")}
//         <img src={avatar_url}/>
//      <h1>Hey!</h1>
//      <p>This is {name} trying to create a website similar to Swiggy's frontend via reactJS</p>
     
//      <p>Location:{location}</p>

//      <p>
//       <loginName.Consumer>
//         {(data)=><h1>{data.logUserName}</h1>}
//       </loginName.Consumer>
//      </p>
     
//      {/* <h3>Count:{count}</h3>
//      <h3>Count2:{count2}</h3> */}
     
//      {/* <button onClick={ ()=>
//       this.setState(
//         {
//           count: this.state.count +1,
//           count2:this.state.count2 +2
//         }
//       )
//      }>Increase</button> */}
//       </div>

//     )
//   }
// }

// export default AboutClass