import { useRouteError } from "react-router-dom"


export const Error =()=>
{
  const err=useRouteError();
  console.log(err);
  return (
    <>
 <h1>This is the way we can create our own Error page</h1>
 <p>{err.status} : {err.statusText}</p>
 </>
  )
}