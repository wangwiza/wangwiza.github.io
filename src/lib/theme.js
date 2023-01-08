import { extendTheme } from '@chakra-ui/react'
import { mode } from '@chakra-ui/theme-tools'

const styles = {
    global: props => ({
        body: {
            // bg color for HTML body
            bg: mode('#f0e7db', '#202023')(props)
        }
    })
}

const config = {
    // Default bg color mode
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const theme = extendTheme({ config, styles })
export default theme