import React from 'react'
import { connect } from 'react-redux'
import { Link } from "react-router-dom"

import { setUserId } from 'models/actions'

const userIds = [ ...Array( 10 ) ].map( ( x, i ) => i + 1 )

@connect(
  ( { userId } ) => ( {
    userId
  } ),
  { setUserId }
)
export default class Home extends React.Component {

  onUserIdChange = ( event ) => {
    const userId = event.target.value

    this.props.setUserId( userId )
  }

  render () {
    const { userId } = this.props

    return (
      <div className="home">
        <h1>Home</h1>
        <div className="user-select">
          <span>User ID</span>
          <select value={ userId } onChange={ this.onUserIdChange }>
            {
              userIds.map( ( id, i ) => <option value={ id } key={ i }>{ id }</option> )
            }
          </select>
        </div>
        <div className="home__link">
          <Link to={ `/posts/${userId}` }>{ `Get Posts For User ID ${userId}.` }</Link>
        </div>
      </div>
    )
  }
}