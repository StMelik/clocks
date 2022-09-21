import { SET_CURRENT_DATE } from '../reducers/dateReducer'

export const setCurrentDateAction = () => {
  return (dispatch) => {
    setInterval(() => {
      dispatch({
        type: SET_CURRENT_DATE,
        payload: new Date(),
      })
    }, 1000)
  }
}
