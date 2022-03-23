import React from 'react'
import GameCard from './GameCard'

function GamesList({games, deleteGame}) {

    
    const renderGames = games.map(game => <GameCard key={game.id} game={game} deleteGame={deleteGame}/>)
  return (
    <div className='list'>{renderGames}</div>
  )
}

export default GamesList