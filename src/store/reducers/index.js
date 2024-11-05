import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import invitation from './invitation'
import wish from './wish'
import guest from './guest'

const rooReducer = combineReducers({ invitation, wish, guest })
const store = createStore(rooReducer, applyMiddleware(thunk))
export default store