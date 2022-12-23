import * as React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Home from './Home'
import Footer from './Footer'


function App() {
    // main structure of website
    return (
        <ChakraProvider >
            <Home />
            <Footer />
        </ChakraProvider>
    )
}
export default App;