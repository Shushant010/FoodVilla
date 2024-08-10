// import AboutClass from "./AboutClass"

import React from "react"
class About extends React.Component{
constructor(props)
  {
    super(props)
    console.log("Parent constructor");
  }
  componentDidMount(){
    console.log("Parent Mounted")
  }
 render()
 { 
  return(
    <>
    <div>
      {console.log("Parent render")}
      <h1>About</h1>
      <p>This is about us page</p>
    </div>
    {/* <AboutClass name="Ansh"/> */}
    </>
  )
}
}
export default About