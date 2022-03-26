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

           

            <NavLink to ="/comments">
                Comments
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

           <NavLink to ="/game/new">
                New Game
            </NavLink>

        </div>
    )
}
export default NavBar