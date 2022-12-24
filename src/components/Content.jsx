import * as React from 'react'
import {
    Box,
    Container,
    Image,
    Heading,
    Text,
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
                <Box
                    h='100vh'
                    
                >

                    <Box>
                        <Heading>
                            Hello,<br/>
                            I'm William Wang,<br/>
                            a Software Engineer based in Canada.
                        </Heading>
                    </Box>
                </Box>
            </Section>
            <Section>
                <Heading variant='section-title'>
                    About
                </Heading>
                <Text>
                    awd
                </Text>
                    <Image
                        src={portrait} 
                        alt='William Wang'
                        borderRadius='full'
                    />
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