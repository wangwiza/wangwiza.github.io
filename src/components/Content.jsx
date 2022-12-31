import * as React from 'react'
import {
    Box,
    Container,
    Image,
    Heading,
    Text,
    HStack,
    Flex,
} from '@chakra-ui/react'
import portrait from '../images/william2.jpg'
import Section from './Section'
import ThemeToggleButton from './ThemeToggleButton'
import Paragraph from './Paragraph'
import SkillLib from './SkillLib'
import Works from './Works'


function Content() {
    // main structure of website
    return (
        <Container
            maxWidth='100vw'
        >
            <Box position='fixed' right='10px' top='10px'>
                <ThemeToggleButton />
            </Box>
            {/* Title */}
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
            {/* About Section */}
            <Section>
                <Box
                    mb={150}
                >
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
                </Box>
            </Section>

            {/* Experience Section */}
            <Section>
                <Box 
                    mb={150}
                >
                    <Heading variant='section-title'>
                        Experience
                    </Heading>
                    <HStack>

                        <Paragraph>
                            I'm continuously developing my skills through personal projects.
                            Whenever I have an idea, I research the technologies I need to
                            create the product I have in mind. Through this simple method,
                            I've acquired a diverse set of skills along the way.
                            <br/><br/>
                            I have participated in hackathons as well to supplement my learnings.
                            At NP Compete, I dabbled into competitive programming and algorithm
                            efficiency. At CodeJam, my teammates and I, tackled mobile app dev.
                            <br /><br />
                            My journey as a developer is far from being over. I still have many
                            regions to explore and bosses to defeat. But for now, I'll keep
                            collecting as many experience points as I can to prepare myself for
                            the future.
                        </Paragraph>

                        <Flex w='50%' justifyContent='center'>
                            <SkillLib/>
                        </Flex>
                    </HStack>
                </Box>
            </Section>

            {/* Work Section */}
            <Section>
                <Box mb={150}>
                    <Heading variant='section-title'>
                        Works
                    </Heading>
                    <Works/>
                </Box>
            </Section>
            {/* Contact Section */}
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