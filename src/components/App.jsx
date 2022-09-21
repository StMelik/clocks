import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { setCurrentDateAction } from '../store/actions/dateAction'
import { fetchTimeZonesAction } from '../store/actions/zoneAction'
import Clock from './Clock/Clock'

function App() {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(setCurrentDateAction())
    dispatch(fetchTimeZonesAction())
  }, [])

  return (
    <div className="app">
      <Clock />
      <Clock />
    </div>
  )
}

export default App
