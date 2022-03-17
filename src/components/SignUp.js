import { useState, useContext } from "react";
import { useHistory, Link } from "react-router-dom";
import { UserContext } from "../context/User";

const SignUp = () => {
    const {setUser} = useContext(UserContext);
    
    const [userObj, setUserObj] = useState({
        email: "",
        password: "",
        username: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setUserObj({
            ...userObj,
            [e.target.name]: e.target.value
        })
    }
    const handleSubmit = e => {
        e.preventDefault()
        if ([userObj.email, userObj.password, userObj.username].some(val => val.trim()=== "")){
            alert("please fill in all required information")
        }
       
    
    fetch("http://localhost:9292/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(userObj)
    })
    .then(resp => {
        if (resp.status === 200) {
        resp.json()
        .then((data) => {
            
            setUser(data)
            history.push("/games")
        })
    }
    })
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
           <label htmlFor="email">Email</label>
                <input onChange={handleChange} type="text" name="email" id="email" value={userObj.email} required/><br /><br />
                <label htmlFor="password">Password</label>
                <input onChange={handleChange} type="password" name="password" id="pwd" value={userObj.password} required/><br /><br />
                <label htmlFor="username">Username</label>
                <input onChange={handleChange} type="text" name="username" id="username" value={userObj.username} required/><br /><br />
                
                <input type="submit" value="Sign Up" />
            </form>  
            <span>Signed up? please</span> <Link to='/login'><button>Login</button></Link> 
        </div>
    )
}
export default SignUp;

