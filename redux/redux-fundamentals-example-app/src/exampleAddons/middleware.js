export const print1 = (storeAPI) => (next) => (action) => {
  console.log('1')
  return next(action)
}

export const print2 = (storeAPI) => (next) => (action) => {
  console.log('2')
  return next(action)
}

export const print3 = (storeAPI) => (next) => (action) => {
  console.log('3')
  return next(action)
}

// export function exampleMiddleware(storeAPI) {
//   return function wrappedDispatch(next) {
//     return function handleAction(action) {
//       return next(action)
//     }
//   }
// }

export const exampleMiddleware = (storeAPI) => (next) => (action) => {
  console.log(`Dispatching ${action.type}`)
  const result = next(action)
  console.log(`Next state: ${JSON.stringify(storeAPI.getState())}`)
  return result
}
