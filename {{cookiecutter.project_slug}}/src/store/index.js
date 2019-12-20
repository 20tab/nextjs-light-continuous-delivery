import { createStore, applyMiddleware, compose } from 'redux'
import { composeWithDevTools } from 'redux-devtools-extension'
import createSagaMiddleware from 'redux-saga'

import reducers from '../reducers'
import sagas from '../sagas'

// Define an initial state
const INITIAL_STATE = { env: window._env || {} }

// Setting up middlewares
const sagaMiddleware = createSagaMiddleware()
const middlewares = [sagaMiddleware]

// Compose enhancers and apply middlewares
const composeEnhancers = process.env.NODE_ENV === 'production' ? compose : composeWithDevTools
const enhancers = composeEnhancers(applyMiddleware(...middlewares))

// Create store
const store = createStore(reducers, INITIAL_STATE, enhancers)

// Run saga - AFTER STORE CREATED
sagaMiddleware.run(sagas)

export default store
