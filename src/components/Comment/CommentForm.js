import {useState} from "react"
import {useHistory} from "react-router-dom"

const CommentForm = () => {
    const [comment, setComment] = useState({
        comment: "",
        game: "",
        user: ""
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
        if ([comment.comment, comment.user, comment.game].some(val => val.trim() === "")) {
            alert("You must fill in all the information please!")
        }

        const newComment = {
            comment: comment.comment,
            game: comment.game,
            user: comment.user
        }

        fetch("/comments", {
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
                <label htmlFor="game">Game Name</label>
                <input onChange={handleChange} type="text" name="game" value={comment.game} required/><br />
                <label htmlFor="user">Username</label>
                <input onChange={handleChange} type="text" name="game" value={comment.user} required/><br />
                
                <input type="submit" value="Create Comment" />
            </form>
        </>
    )
}

export default CommentForm
