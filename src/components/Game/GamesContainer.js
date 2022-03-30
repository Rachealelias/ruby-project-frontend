import {useState, useEffect} from "react"
import GamesList from "./GamesList";
import "../css/style.css"

const GamesContainer = () => {
    const [games, setGames] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://localhost:9292/games")
                const data = await resp.json()
            
                setGames(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
        
    }, []);
   

    if (!!loading) return( <h1>Loading...</h1>)

    function deleteGame(id){
      const gamesFiltered = games.filter(g => g.id !== id);
      console.log(id)
          setGames(gamesFiltered);
          console.log(games)
    }

    return (
        <div className="container">
            {/* <h2>Our Games</h2> */}
            <GamesList games={games} deleteGame={deleteGame}/>
        </div>
    )
}

export default GamesContainer