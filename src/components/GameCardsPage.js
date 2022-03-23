import {images} from "../context/Images"
import "./css/style.css";


function GameCardsPage() {
  return (
      
    <div className='gamecard'>
        {images.map((image) => {
            return <div key={image.id}>
               <img src={image.url}/>
                </div>
            
        })}

    
    </div>
    
  )
}

export default GameCardsPage