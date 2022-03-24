import React from 'react'
import { useState, useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import "../css/style.css"

function GamesCard({ game, deleteGame }) {
  const { id } = useParams()
  const location = useLocation()
  const [gameObj, setGameObj] = useState(null);
  useEffect(() => {
    if (!game) {
      fetch(`http://localhost:9292/games/${id}`)
        .then((resp) => resp.json())
        .then((game) => setGameObj(game))
    }
  }, [game, id]);
  const finalGame = game ? game : gameObj
  if (!finalGame) return <h1>Loading...</h1>

  function handleDeleteClick() {
    fetch(`/games/${game.id}`, {
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
      <img src={finalGame.image_url} alt="cards" />
      <h3>Name: <Link to={`/games/${finalGame.id}`}>{finalGame.name}</Link></h3>
      <h3> likes: {finalGame.likes}</h3>
      {/* <h4>User: {finalGame.user_id}</h4> */}
      {location.pathname !== "/games" ? (<div><button onClick={handleDeleteClick}>Delete</button>
        <Link to='/comment'><button>Add Comment</button></Link>
        </div>) : null}

    </div>
  )

}

export default GamesCard