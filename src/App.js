import React, { useContext } from 'react'
import { GlobalStyles } from './styles/global'
import Layout from './component/Layout/index'
import { ThemeProvider } from 'styled-components'
import { AppContext } from './store/index'

function App() {
  const { theme } = useContext(AppContext)
  return (
    <ThemeProvider theme={theme}>
      <>
        <GlobalStyles />
        <Layout />
      </>
    </ThemeProvider>
  )
}

export default App
