import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import invitation from './invitation'

const rooReducer = combineReducers({ invitation })
const store = createStore(rooReducer, applyMiddleware(thunk))
export default store