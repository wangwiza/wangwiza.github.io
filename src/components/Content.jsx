import * as React from 'react'
import {
    Box,
    Container,
    Image,
    Heading,
    Text,
    HStack,
    Grid,
    GridItem,
} from '@chakra-ui/react'
import portrait from '../images/william2.jpg'
import Section from './Section'
import ThemeToggleButton from './ThemeToggleButton'
import Paragraph from './Paragraph'

function Content() {
    // main structure of website
    return (
        <Container
            maxWidth='100vw'
        >
            <Box position='absolute' right='10px' top='10px'>
                <ThemeToggleButton />
            </Box>
            <Section>
                <Box
                    h='100vh'
                    alignItems='center'
                    display='flex'
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
                <HStack>
                    <Paragraph>
                        Hello! I'm William. I'm a software engineer based in Montreal with
                        a passion for art and technology. Through building 3D animations using Python 
                        to illustrate concepts of physics, I realised that programming is a fun way 
                        to share what I enjoy with others. 
                        <br/><br/>
                        I'm also a software engineering co-op student at McGill. I'm part of the MCSS
                        (McGill Chinese Student Society) as a First Year Rep, and will soon be the 
                        webmaster. I will be joining GDM (Game Dev McGill) too in Winter 2023.
                        <br /><br/>
                        Currently, I'm working on my WebDev skills
                        so I can present my projects beautifully. After that, I'll start my data science
                        Python project involving music.
                    </Paragraph>
                    <Box
                        w='50%'
                        h='10rem'
                        align='center'
                    >
                        <Image
                            src={portrait} 
                            alt='William Wang'
                            borderRadius='full'
                            h='full'
                        />
                    </Box>
                </HStack>
            </Section>

            <Section>
                <Heading variant='section-title'>
                    Experience
                </Heading>
                <HStack>
                    <Paragraph>
                        My first 
                    </Paragraph>
                    <Grid
                        templateRows='repeat(5, 1fr)'
                        templateColumns='repeat(6, 1fr)'
                        gap={4}
                    >
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                        <GridItem>what</GridItem>
                    </Grid>
                </HStack>
            </Section>

            <Section>
                <Heading variant='section-title'>
                    Work
                </Heading>
                <Text>
                    awd
                </Text>
            </Section>

            <Section>
                <Heading variant='section-title'>
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