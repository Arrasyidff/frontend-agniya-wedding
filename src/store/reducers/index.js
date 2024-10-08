import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import invitation from './invitation'
import wish from './wish'

const rooReducer = combineReducers({ invitation, wish })
const store = createStore(rooReducer, applyMiddleware(thunk))
export default store