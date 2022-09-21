export const SET_CURRENT_DATE = 'SET_CURRENT_DATE'

const initialState = {
  currentDate: new Date(),
}

export const dateReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_CURRENT_DATE:
      return { ...state, currentDate: action.payload }
    default:
      return state
  }
}
