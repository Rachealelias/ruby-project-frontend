import React from 'react'
import CommentCard from './CommentCard'

function CommentList({comments}) {

    
    const renderComments = comments.map(comment => <CommentCard key={comment.id} comment={comment}/>)
  return (
    <div className='comment-list'>{renderComments}</div>
  )
}
export default CommentList;