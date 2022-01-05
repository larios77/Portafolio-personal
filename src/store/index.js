import React from 'react'
import useInitialState from '../hook/useInitialState'

export const AppContext = React.createContext({})

const AppProvider = ({ children }) => {
  const initialState = useInitialState()

  return (
    <AppContext.Provider value={initialState}>{children}</AppContext.Provider>
  )
}

export default AppProvider
