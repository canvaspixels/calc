import { createStore, combineReducers } from 'redux'
import evaluateReducers from './evaluateReducers'

const devToolsExt = global.__REDUX_DEVTOOLS_EXTENSION__ && global.__REDUX_DEVTOOLS_EXTENSION__()

const rootReducer = combineReducers({
  calculator: evaluateReducers,
})

export default createStore(rootReducer, devToolsExt)
