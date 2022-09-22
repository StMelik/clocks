import { fetchData } from '../../server/fetchData'
import {
  FETCH_ZONE,
  FETCH_ZONE_ERROR,
  FETCH_ZONE_SUCCESS,
} from '../reducers/zoneReducer'

export const fetchTimeZonesAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ZONE })
    try {
      fetchData(2500).then((res) => {
        dispatch({ type: FETCH_ZONE_SUCCESS, payload: res })
      })
    } catch (e) {
      dispatch({
        type: FETCH_ZONE_ERROR,
        payload: 'Произошла ошибка при загрузки временных зон',
      })
    }
  }
}
