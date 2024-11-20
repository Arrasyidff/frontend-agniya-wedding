import { combineReducers, createStore, applyMiddleware } from 'redux'
import { thunk } from 'redux-thunk'
import invitation from './invitation'
import wish from './wish'
import guest from './guest'
import event from './event'

const rooReducer = combineReducers({ invitation, wish, guest, event })
const store = createStore(rooReducer, applyMiddleware(thunk))
export default store