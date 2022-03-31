import React from 'react'
import { useState, useEffect } from "react"
import { Link, useParams, useLocation } from "react-router-dom"
import "../css/style.css"


function GamesCard({ game, deleteGame, comments}) {
  
  const {id} = useParams()
  const location = useLocation()
  const [gameObj, setGameObj] = useState(null);
  const [like, setLike] = useState(0)
  
  
  //const like = document.querySelector('h4').innerHTML()

  function addLike(){
    setLike((like) => like + 1)
}

  useEffect(() => {
    if (!game) {
      fetch(`http://localhost:9292/games/${game.id}`)
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


  return (
    <div className='game-container'>
      <div className='game-card'>
      
      <img src={finalGame.image_url} alt="cards" />
      <h3>Name:<Link to={`/games/${finalGame.id}`}>{finalGame.name}</Link></h3>
      <h4 id='like'> likes: {finalGame.likes + like}</h4>
      
         {location.pathname !== "/games" ? (<div className='display'><button onClick={handleDeleteClick}>Delete</button>
        <Link to='/comments/new'><button>Add Comment</button></Link>
        <button onClick={addLike}> 👍</button>
        <ul>{finalGame.comments.map(comment => <li>{comment.comment}</li>)}</ul>
        </div>) : null }
        </div>
    </div>
  )

}

export default GamesCard