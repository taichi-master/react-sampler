import * as types from 'models/action-types'

export default ( userId = null, action ) => {
  switch ( action.type ) {
  case types.SET_USERID:
    return action.userId
  default:
    return userId
  }
}
