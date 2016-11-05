import * as constant from '../common/constants'

function TodoReducer(state = [], action) {
  switch (action.type) {
    // here we use constants for the action: because 
    case constant.SAVE:
      console.log('saving....')
      return [...state, action.payload]
    case constant.FETCH_FULFILLED:
      return Object.assign({}, state, { payload: action.payload, action: action.type })
    default:
      return state
  }
}

export default TodoReducer

