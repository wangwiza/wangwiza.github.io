import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home'
import theme from '../lib/theme'



function App() {
    // main structure of website
    return (
        <ChakraProvider theme={theme}>
            <Home />
        </ChakraProvider>
    )
}
export default App;