'use client'
import React from 'react'
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import { red } from '@mui/material/colors'

const theme = createTheme({
  palette: {
    primary: {
      main: '#556cd6'
    },
    secondary: {
      main: '#19857b'
    },
    error: {
      main: red.A400
    }
  }
})
const MuiProvider = ({ children }) => {
  return (
    <AppRouterCacheProvider >
      <ThemeProvider theme={theme} >
        {children}

      </ThemeProvider>
    </AppRouterCacheProvider>
  )
}

export default MuiProvider
