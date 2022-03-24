import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../context/User";

const Login = () => {
    const {setUser} = useContext(UserContext);
    
    const [loggedInObj, setLoggedInObj] = useState({
        username: "",
        password: ""
       
    });
    const history = useHistory()

    const handleChange = (e) => {
        setLoggedInObj({
            ...loggedInObj,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([loggedInObj.username, loggedInObj.password ].some(val => val.trim()=== "")){
        alert("please fill in all required information")
        }
    
    fetch("http://localhost:9292/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(loggedInObj)
    })
    .then(resp => {
        if (resp.status === 200) {
        resp.json()
        .then((data) => {
            setUser(data.user)
            history.push("/gamescards")
        })
    }else {
        resp.json()
        .then(data => console.log(data.error))
    }
    })
    .catch(err => console.log(err))
}
    return(
        <div>
            <form onSubmit={handleSubmit}>
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" id="pwd" value={loggedInObj.password} required/><br /><br />
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} type="text" name="username" id="username" value={loggedInObj.username} required/><br /><br />
                
                <input type="submit" value="Login" />
            </form>  
            <span>Not Signed up? please</span> <Link to='/signup'><button>Sign up</button></Link>
        </div>
    )
}

export default Login

