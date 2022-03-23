import React from 'react'
import {useState, useEffect} from "react"
import {Link, useParams} from "react-router-dom"
import "./css/style.css"

function GamesCard({game, deleteGame}) {
  const {id} = useParams()
    const [gameObj, setGameObj] = useState(null);
    useEffect(() => {   
        if (!game) {
            fetch(`http://localhost:9292/games/${id}`)
            .then(resp => resp.json())
            .then(game => setGameObj(game))
        }
    }, [game, id]);
    const finalGame = game ? game : gameObj
    if (!finalGame) return <h1>Loading...</h1>

    function handleDeleteClick() {
      fetch(`http://localhost:9292/games/${game.id}`, {
        method: "DELETE",
      })
        .then(r => r.json())
        .then(data => {
      
         deleteGame(game.id)
          console.log(data, 'deleted item')
        });
    }

  return (
    <div className='games'>
      <h3>Score: <Link to={`/games/${finalGame.id}`}>{finalGame.score}</Link></h3>
        <h4>Total_time: {finalGame.total_time}</h4>
        <h4>User_id: {finalGame.user_id}</h4>
        <button onClick={handleDeleteClick}>Delete</button>
    </div>
  )
}

export default GamesCard