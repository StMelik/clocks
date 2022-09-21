import { fetchData } from '../../utils/server/fetchData'
import {
  FETCH_ZONE,
  FETCH_ZONE_ERROR,
  FETCH_ZONE_SUCCSESS,
} from '../reducers/zoneReducer'

export const fetchTimeZonesAction = () => {
  return (dispatch) => {
    dispatch({ type: FETCH_ZONE })
    try {
      fetchData(2.5).then((res) => {
        dispatch({ type: FETCH_ZONE_SUCCSESS, payload: res })
      })
    } catch (e) {
      dispatch({
        type: FETCH_ZONE_ERROR,
        payload: 'Произошла ошибка при загрузке временных зон',
      })
    }
  }
}
