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

const components = {
    Heading: {
        baseStyle: {
            fontWeight: 'normal'
        },
        variants: {
            'page-title': {
                
            },
            'section-title': {
                
            }
        }
    },
    Link: {
        variants: {
            'title-link': {
                textDecoration: 'underline',
                textUnderlineOffset: '20%',
                textDecorationThickness: '5%',
                '&:hover': {
                    textDecoration: 'underline',
                    textUnderlineOffset: '20%',
                    textDecorationThickness: '5%',
                    color: 'gray'
                }
            }
        }
    }
}

const config = {
    // Default bg color mode
    initialColorMode: 'dark',
    useSystemColorMode: true
}

const fonts = {
    heading: "'Noto Sans', sans-serif"
}

const theme = extendTheme({ config, styles, fonts, components })
export default theme