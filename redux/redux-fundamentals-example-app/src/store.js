import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'
import {
  print1,
  print2,
  print3,
  exampleMiddleware,
} from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(
  exampleMiddleware,
  print1,
  print2,
  print3
)
const composedEnhancer = composeWithDevTools(
  sayHiOnDispatch,
  includeMeaningOfLife,
  middlewareEnhancer
)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
