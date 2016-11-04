import {
  SAVE
} from '../common/constants'

function TodoReducer (state = [] , action) {
  switch (action.type) {
    // here we use constants for the action: because 
    case SAVE:
    console.log('saving....')
      return  [...state, action.payload] 
 
    default:
      return state
  }
}

export default TodoReducer

