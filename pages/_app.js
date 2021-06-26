import '../styles/global.css'
import { ChakraProvider } from "@chakra-ui/react"
import theme from '../theme'

import { Provider } from 'react-redux';
import {store, persistor } from '../redux/store'
import { PersistGate } from 'redux-persist/integration/react';

export default function App({ Component, pageProps }) {
    return (
        <ChakraProvider theme={theme}>
          <Provider store={store}>
              <PersistGate persistor={persistor}>
                <Component {...pageProps} />
              </PersistGate>
          </Provider>
        </ChakraProvider>
      )
}