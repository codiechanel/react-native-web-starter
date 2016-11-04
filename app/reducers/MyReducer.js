import {
  PING,
  PONG,
} from '../common/constants'

const MyReducer = (state = { isPinging: false }, action) => {
  switch (action.type) {
    // here we use constants for the action: because 
    case PING:
      return { isPinging: true, action: PING }
    case PONG:
      return { isPinging: false, action: PONG }
    default:
      return state
  }
}

export default MyReducer

