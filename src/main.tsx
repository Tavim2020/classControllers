import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import store from './store/configStore'
import { Provider } from 'react-redux'

import { ThemeProvider } from 'styled-components'
import theme from './style/theme'

import GlobalStyle from './style/globalStyles'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <App />
      </ThemeProvider>
    </Provider>
  </React.StrictMode>
)
