import React,{useContext}from 'react'
import {NavLink} from 'react-router-dom'
import { UserContext } from '../context/User'
import "./css/style.css"

function NavBar(){
    const {user} = useContext(UserContext)

    return(
        <div className='nav-bar'>
            <NavLink to ="/">
                Home
            </NavLink>

            <NavLink to ="/games">
                Games
            </NavLink>

            <NavLink to ="/gamescards">
                GameCards
            </NavLink>
           
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