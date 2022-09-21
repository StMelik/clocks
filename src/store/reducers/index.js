import { combineReducers } from 'redux'
import { dateReducer } from './dateReducer'
import { zoneReducer } from './zoneReducer'

export const rootReduser = combineReducers({
  date: dateReducer,
  zone: zoneReducer,
})
