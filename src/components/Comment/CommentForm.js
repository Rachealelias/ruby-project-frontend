import {useState} from "react"
import {useHistory} from "react-router-dom"

const CommentForm = () => {
    const [comment, setComment] = useState({
        comment: "",
        game_id: "",
        user_id: ""
    });
    const history = useHistory()

    const handleChange = (e) => {
        setComment({
            ...comment,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = e => {
        e.preventDefault()
        if ([comment.comment, comment.game_id, comment.user_id].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newComment = {
            comment: comment.comment,
            game_id: comment.game_id,
            user_id: comment.user_id
        }

        fetch("http://localhost:9292/comments", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newComment)
        })
        .then(() => history.push("/comments"))
        
    }
    return (
        <>
            <h3>Drop a comment</h3>
            <form onSubmit={handleSubmit}>
                <label htmlFor="comment">Comment</label>
                <input onChange={handleChange} type="text" name="comment" value={comment.comment} required/><br />
                <label htmlFor="game">Game </label>
                <input onChange={handleChange} type="text" name="game_id" value={comment.game_id} required/><br />
                <label htmlFor="user">User</label>
                <input onChange={handleChange} type="text" name="user_id" value={comment.user_id} required/><br />
                
                <input type="submit" value="Create Comment" />
            </form>
        </>
    )
}

export default CommentForm
