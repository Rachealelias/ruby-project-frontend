import {useState} from "react"
import {useHistory} from "react-router-dom"

const GameForm = () => {
    const [game, setGame] = useState({
        name: "",
        image_url: "",
        likes: "",
        user_id: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setGame({
            ...game,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([game.name, game.image_url, game.likes, game.user_id].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newGame = {
            name: game.name, 
            image_url: game.image_url,
            likes:  game.likes, 
            user_id: game.user_id
        }

        fetch("http://localhost:9292/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newGame)
        })
        .then(() => history.push("/games"))
        
    }
    return (
        <>
            <h3>Create a new Game</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" value={game.name} required/><br />
                <label htmlFor="image_url">Image Url</label>
                <input onChange={handleChange} type="text" name="image_url" value={game.image_url} required/><br />
                <label htmlFor="likes">Likes</label>
                <input onChange={handleChange} type="number" name="likes" value={game.likes} required/><br />
                
                <label htmlFor="user_id">User</label>
                <input onChange={handleChange} type="number" name="user_id" value={game.user_id} required/><br />
                
                <input type="submit" value="Create Game" />
            </form>
        </>
    )
}

export default GameForm
