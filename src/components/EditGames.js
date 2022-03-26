import { useState} from "react";
import { useHistory, useParams} from "react-router-dom";


const EditGames = ({game, onEdit}) => {
    
    const [editGameObj, setEditGameObj] = useState(game)
    const {id} = useParams()   
    const history = useHistory()

    const handleChange = (e) => {
        setEditGameObj({
            ...editGameObj,
            [e.target.name]: e.target.value
        })
    }

    const newGame = {
        name: editGameObj.name,
        }
    
        const handleSubmit = e => {
        e.preventDefault()
           fetch(`http://localhost:9292/games/${id}`, {
        method: "PATCH",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(newGame)
    })
    .then(resp => {
        if (resp.status === 200) {
        resp.json()
        .then((updatedGame) => {
            
            onEdit(updatedGame)
            history.push("/games")
        })
        .catch(error => console.log(error))
    }
    })
}
    return(
        <div>
           <form onSubmit={handleSubmit}>
           <label htmlFor="name">Name</label>
                <input onChange={handleChange} type="text" name="name" id="name" value={editGameObj.name} required/> <br /><br />
                
                <input type="submit" value="Save" />
            </form>  
            
        </div>
    )
}
export default EditGames;

