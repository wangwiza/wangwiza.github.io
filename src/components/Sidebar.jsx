import React from "react";
import {
    Box,
    Flex,
    Stack,
    Heading,
    Container,
    useColorModeValue,
    HStack,
    Icon,
    VStack,
    Link
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import LinkItem from "./LinkItem";

function Sidebar() {
    return (
        <Box
            position="fixed"
            h='100%'
            w='8rem'
            zIndex={2}
            bg={useColorModeValue('#ffffff40', '#100c08')}
        >
            {/* Sidebar Logo Top Left */}
            <Container h='full'>
                <VStack h='full' spacing='300px'>
                    {/* Personal Logo */}
                    <Flex
                    >
                        <Heading>
                            WW
                        </Heading>
                    </Flex>
                    {/* Navigation Links */}
                    <Stack 
                        direction='column'
                        spacing='10px'
                        border
                    >
                        <LinkItem>About</LinkItem>
                        <LinkItem>Experience</LinkItem>
                        <LinkItem>Works</LinkItem>
                        <LinkItem>Contact</LinkItem>
                    </Stack>
                    {/* Social Links */}
                    <HStack>
                        <LinkItem href='https://github.com/wangwiza' isExternal>
                            <Icon as={FaGithub} boxSize={6}/>                    
                        </LinkItem>
                        <LinkItem href='https://www.linkedin.com/in/willzawang/' isExternal>
                            <Icon as={FaLinkedin} boxSize={6} />                    
                        </LinkItem>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
}

export default Sidebar;