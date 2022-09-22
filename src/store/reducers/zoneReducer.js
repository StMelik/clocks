export const FETCH_ZONE = 'FETCH_ZONE'
export const FETCH_ZONE_SUCCESS = 'FETCH_ZONE_SUCCESS'
export const FETCH_ZONE_ERROR = 'FETCH_ZONE_ERROR'

const initialState = {
  timeZones: [],
  loading: false,
  error: '',
}

export const zoneReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ZONE:
      return { ...state, loading: true }
    case FETCH_ZONE_SUCCESS:
      return { ...state, loading: false, timeZones: action.payload }
    case FETCH_ZONE_ERROR:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}
