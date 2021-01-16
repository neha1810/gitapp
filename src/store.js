import {applyMiddleware, createStore} from 'redux'
import allReducers from './reducers'
import {middlewares} from './middleware'

export const store=createStore(allReducers,applyMiddleware(...middlewares));