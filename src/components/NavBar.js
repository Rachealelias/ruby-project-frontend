import React,{useContext}from 'react'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../context/User'

function NavBar(){
    const {user} = useContext(UserContext)

    return(
        <div>
           {user ? <NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
          to="/logout"
           >Logout</NavLink> : (<NavLink
           activeStyle={{
               fontWeight:"bolder",
               color: "red"
           }}
          to="/signup"
           >SignUp</NavLink> )}
        </div>
    )
}
export default NavBar