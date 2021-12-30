const initialState = {
  status: 'All',
  colors: [],
}

export default function filtersReducer(state = initialState, action) {
  switch (action.type) {
    case 'filters/statusFilterChanged':
      return {
        ...state,
        status: action.payload,
      }

    default:
      return state
  }
}
