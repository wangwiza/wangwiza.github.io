import React from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Link,
    Container,
} from '@chakra-ui/react'

function Sidebar() {
    return (
        <Box
            position="fixed"
            h='100%'
            w='10rem'
            bg='gray.200'

        >
            {/* Sidebar Logo Top Left */}
            <Container
            >
                <Flex>
                    <Heading>
                        WW
                    </Heading>
                </Flex>
                {/* Navigation Links */}
                <Stack 
                    direction='column'
                >
                    <Link>About</Link>
                    <Link>Experience</Link>
                    <Link>Works</Link>
                    <Link>Contact</Link>
                </Stack>

            </Container>
        </Box>
    );
}

export default Sidebar;