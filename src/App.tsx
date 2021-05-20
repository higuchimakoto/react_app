import { ChakraProvider } from '@chakra-ui/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

import { Router } from './router/Router'

import theme from './themes/theme'

export const App = () => {
  return (
    <ChakraProvider theme={theme}>
      <BrowserRouter>
        <Router />
      </BrowserRouter>
    </ChakraProvider>
  )
}
