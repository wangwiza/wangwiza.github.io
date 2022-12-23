import * as React from 'react'
import {
    Box,
    Container,
    Image,
    Heading
  } from '@chakra-ui/react'
import portrait from '../images/william.jpg'

function Home() {
    // main structure of website
    return (
        <Container>
            <Box>
                Hello, I'm a Software Engineer based in Canada!
            </Box>
            <Box>
                <Box>
                    <Heading>
                        William Wang
                    </Heading>
                    <p>Code Practitioner</p>
                </Box>

                <Box>
                    <Box>
                        <Image src={portrait} alt='William Wang'/>
                    </Box>
                </Box>
            </Box>
            

        </Container>
    )
}
export default Home;