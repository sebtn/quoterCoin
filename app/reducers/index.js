import {combineReducers} from 'redux'

import {coinReducer} from './coinReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  coins: coinReducer
})

export default rootReducer