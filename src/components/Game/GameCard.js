import React from 'react'
import { useState, useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import "../css/style.css"
import EditGames from '../EditGames'

function GamesCard({ game, deleteGame, comments}) {
  const {id} = useParams()
  const location = useLocation()
  const [gameObj, setGameObj] = useState(null);
  const [like, setLike] = useState(0)
  const [isEditing, setIsEditing] = useState(false)
  
  //const like = document.querySelector('h4').innerHTML()

  function addLike(){
    setLike((like) => like + 1)
}


  
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
    fetch(`http://localhost:9292/games/${game.id}`, {
      method: "DELETE",
    })
      .then(r => r.json())
      .then(data => {

        deleteGame(game.id)
        console.log(data, 'deleted item')
      });
  }

  const handleUpdate = () => {
    setIsEditing(true)
  }


  return (
    <div className='games'>
      {isEditing ? (
        <EditGames id={id} game={finalGame} onEdit={handleUpdate} />) :(
        <h3>
          {' '}
          {/* {finalGame.name}{' '} */}
        </h3>
      )}
      <img src={finalGame.image_url} alt="cards" />
      <h3>Name: <Link to={`/games/${finalGame.id}`}>{finalGame.name}</Link></h3>
      <h4 id='like'> likes: {finalGame.likes + like}</h4>
      {/* <h4>User: {finalGame.user_id}</h4> */}
      {location.pathname !== "/games" ? (<div><button onClick={handleDeleteClick}>Delete</button>
        <Link to='/comments/new'><button>Add Comment</button></Link>
        <button onClick={addLike}> 👍</button>
        <button onClick={() => setIsEditing((isEditing) => !isEditing)}>Edit</button>
        
        </div>) : null}

    </div>
  )

}

export default GamesCard