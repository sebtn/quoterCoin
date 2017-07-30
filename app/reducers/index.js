import {combineReducers} from 'redux'

import {coinReducer} from './coinReducer'

const rootReducer = combineReducers({
  // state: (state = {}) => state
  coinReducer: coinReducer
})

export default rootReducer