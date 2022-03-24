import {useState, useEffect} from "react"
import CommentList from "./CommentList";
import "../css/style.css"

const CommentContainer = () => {
    const [comments, setComments] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const resp = await fetch("http://localhost:9292/comments")
                const data = await resp.json()
                debugger
                setComments(data)
                setLoading(false)
            } catch (error) {
                alert(error)
            }
        }

        fetchData()
        
    }, []);
   

    if (!!loading) return( <h1>Loading...</h1>)

    

    return (
        <div className="comment-container">
            {/* <h2>Our Games</h2> */}
            <CommentList comments={comments}/>
        </div>
    )
}

export default CommentContainer