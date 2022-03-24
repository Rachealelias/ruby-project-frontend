import {useState} from "react"
import {useHistory} from "react-router-dom"

const GameForm = () => {
    const [game, setGame] = useState({
        score: "",
        total_time: "",
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
        if ([game.score, game.total_time, game.user_id].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newGame = {
            score: game.score,
            total_time: game.total_time,
            user_id: game.user_id
        }

        fetch("/games", {
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
