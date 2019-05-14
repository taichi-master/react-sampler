import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { getCommentsByPost } from '@models/actions'
import { validateComments } from '@models/rules'

const CommentItem = ( comment, i ) => {
  const { id, name, email, body } = comment

  return (
    <tr className="comment" key={ i }>
      <td>{ id }</td>
      <td>{ name }</td>
      <td>{ email }</td>
      <td>{ body }</td>
    </tr>
  )
}

const CommentTable = ( { comments } ) => (
  <table className="comments__table">
    <thead>
      <tr>
        <th className="id">COMMENT ID</th>
        <th className="name">NAME</th>
        <th className="email">EMAIL</th>
        <th className="body">BODY</th>
      </tr>
    </thead>

    <tbody>
      {
        comments.map( CommentItem )
      }
    </tbody>
  </table>
)
    
@connect(
  ( { comments: { isFetching, didInvalidate, postId, data: comments }, userId } ) => ( {
    isFetching,
    didInvalidate,
    postId,
    comments,
    userId
  } ),
  { getCommentsByPost }
)
export default class Posts extends React.Component {

  componentDidMount () {
    console.log('componentDidMount')
    const { getCommentsByPost, postId, match } = this.props

    if ( postId !== match.params.postId )
      getCommentsByPost( match.params.postId )
  }

  render () {
    const { match: { params: { postId } }, comments, isFetching, userId } = this.props
    console.log('render')

    return (
      <div className="comments">
        <h1>Comments For <Link to={ `/posts/${userId}` }>{ `Post ID ${postId}` }</Link></h1>
        {
          isFetching ?
            <h1>Loading...</h1>
            : 
            (
              validateComments( comments ) ?
                <CommentTable comments={ comments } />
                :
                <h1 className="error">Comments are not allowed to display.</h1>
            )
        }
      </div>
    )
  }
}