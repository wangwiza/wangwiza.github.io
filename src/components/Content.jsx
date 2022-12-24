import * as React from 'react'
import {
    Box,
    Container,
    Image,
    Heading,
    Text,
    chakra
} from '@chakra-ui/react'
import portrait from '../images/william.jpg'
import Section from './Section'
import ThemeToggleButton from './ThemeToggleButton'

function Content() {
    // main structure of website
    return (
        <Container
            h='100vh'
            maxWidth='100vw'
        >
            <Box position='absolute' right='10px' top='10px'>
                <ThemeToggleButton />
            </Box>
            <Section>
                <Box>
                    <Box>

                    </Box>
                    <Box>
                        <Heading>
                            Hello, I'm William Wang.
                        </Heading>

                        <p>Code Practitioner</p>
                    </Box>
                </Box>
            </Section>
            <Section>
                <Heading>
                    About
                </Heading>
                <Text>
                    awd
                    <Image
                        src={portrait} 
                        alt='William Wang'
                        borderRadius='full'

                    />
                </Text>
            </Section>

            <Section>
                <Heading>
                    Experience
                </Heading>
                <Text>
                    awd
                </Text>
            </Section>

            <Section>
                <Heading>
                    Work
                </Heading>
                <Text>
                    awd
                </Text>
            </Section>

            <Section>
                <Heading>
                    Contact
                </Heading>
                <Text>
                    awd
                </Text>
            </Section>


        </Container>
    )
}
export default Content;