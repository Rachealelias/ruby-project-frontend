import {images} from "../context/Images"
import "./css/style.css";


function GameCardsPage() {

    const like = "🥰"
    const dislike = "😡"

    function handleLike (){

    }

    
  return (
      
    <div className='gamecard'>
        {images.map((image) => {
            return <div key={image.id}>
               <img src={image.url} alt="cards"/>
               <button onClick = {handleLike}>{dislike ? like : dislike}</button>
                </div>
            
        })}

    
    </div>
    
  )
}

export default GameCardsPage