import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"
import { getPostsByUser } from 'models/actions'

const PostItem = ( post, i ) => {
  const { id, title, body } = post

  return (
    <tr className="post" key={ i }>
      <td><Link to={ '/comments/' + id } title="Show Comments">{ id }</Link></td>
      <td>{ title }</td>
      <td>{ body }</td>
    </tr>
  )
}

@connect(
  ( { posts: { isFetching, didInvalidate, userId, data: posts } } ) => ( {
    isFetching,
    didInvalidate,
    userId,
    posts
  } ),
  { getPostsByUser }
)
export default class Posts extends React.Component {
  
  componentDidMount () {
    const { getPostsByUser, userId, match } = this.props

    if ( userId !== match.params.userId )
      getPostsByUser( match.params.userId )
  }

  render () {
    const { match: { params: { userId } }, posts } = this.props

    return ( <div className="posts">
      <h1>Posts For <Link to="/">{ `User ID ${userId}` }</Link></h1>
      <table className="posts__table">
        <thead>
          <tr>
            <th className="id">POST ID</th>
            <th className="title">TITLE</th>
            <th className="body">BODY</th>
          </tr>
        </thead>

        <tbody>
          {
            posts.map( PostItem )
          }
        </tbody>
      </table>
    </div> )
  }
}