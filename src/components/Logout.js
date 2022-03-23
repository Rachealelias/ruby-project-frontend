import React, { useEffect, useContext} from 'react'
import { useHistory } from 'react-router-dom'
import { UserContext } from '../context/User'

function Logout() {
    const history = useHistory()
    const {setUser} = useContext(UserContext)
    useEffect(() => {
        setUser(null)
        history.push("/")
    }, [])
    
    return (
       <h2>Logged out</h2>
    )
}

export default Logout