import { createStore, compose, applyMiddleware } from 'redux'
import rootReducer from './reducer'
import {
  sayHiOnDispatch,
  includeMeaningOfLife,
} from './exampleAddons/enhancers'
import { print1, print2, print3 } from './exampleAddons/middleware'

const middlewareEnhancer = applyMiddleware(print1, print2, print3)
const composedEnhancer = compose(
  sayHiOnDispatch,
  includeMeaningOfLife,
  middlewareEnhancer
)

const store = createStore(rootReducer, undefined, composedEnhancer)

export default store
