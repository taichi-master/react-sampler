import { combineReducers } from 'redux'

import comments from './comments'
import posts from './posts'
import userId from './userId'

export default combineReducers( {
  comments,
  posts,
  userId
} )