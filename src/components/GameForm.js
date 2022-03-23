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
                <label htmlFor="score">Score</label>
                <input onChange={handleChange} type="text" name="score" value={game.score} required/><br />
                <label htmlFor="total-time">Total Time</label>
                <input onChange={handleChange} type="text" name="total_time" value={game.total_time} required/><br />
                <label htmlFor="user_id">User</label>
                <input onChange={handleChange} type="number" name="user_id" value={game.user_id} required/><br />
                
                <input type="submit" value="Create Game" />
            </form>
        </>
    )
}

export default GameForm
