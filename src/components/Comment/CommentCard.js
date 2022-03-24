import React from 'react'
import { useState, useEffect } from "react"
import { Link, useParams } from "react-router-dom"
import "../css/style.css"

function CommentCard({comment}) {
    const { id } = useParams()
    const [commentObj, setCommentObj] = useState(null);
    useEffect(() => {
      if (!comment) {
        fetch(`http://localhost:9292/comments/${id}`)
          .then((resp) => resp.json())
          .then((comment) => setCommentObj(comment))
      }
    }, [comment, id]);
    const finalComment = comment ? comment : commentObj
    if (!finalComment) return <h1>Loading...</h1>
  
    
  
  
    return (
      <div className='comments'>
        <h3>Comment: <Link to={`/comments/${finalComment.id}`}>{finalComment.comment}</Link></h3>
        <h3>{finalComment.created_at}</h3>

      </div>
    )
}

export default CommentCard