import React from 'react'
import { Provider } from 'react-redux'
import configureStore from './configureStore'
import { BrowserRouter } from 'react-router-dom'

export default ( { children } ) => (
  <Provider store={ configureStore( window.__INITIAL_STATE__ ) }>
    <BrowserRouter>
      { children }
    </BrowserRouter>
  </Provider>
)