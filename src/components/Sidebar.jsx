import React from "react";
import {
    Box,
    Flex,
    Stack,
    Container,
    useColorModeValue,
    HStack,
    Icon,
    VStack,
    Image,
    Link
} from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import logo from "../images/logo.png"

function Sidebar() {
    return (
        <Box
            position="fixed"
            h='100%'
            w='8rem'
            zIndex={2}
            bg={useColorModeValue('#f8f3ed', '#100c08')}
        >
            {/* Sidebar Logo Top Left */}
            <Container h='full'>
                <VStack h='full' spacing='300px'>
                    {/* Personal Logo */}
                    <Flex>
                        <Link href='#title-section'>
                            <Image src={logo} alt='William Logo' />
                        </Link>
                    </Flex>
                    {/* Navigation Links */}
                    <Stack 
                        direction='column'
                        spacing='10px'
                        border
                    >
                        <Link href='#about-section'>About</Link>
                        <Link href='#exp-section'>Experience</Link>
                        <Link href='#works-section'>Works</Link>
                        <Link href='#contact-section'>Contact</Link>
                    </Stack>
                    {/* Social Links */}
                    <HStack>
                        <Link href='https://github.com/wangwiza' isExternal>
                            <Icon as={FaGithub} boxSize={6}/>                    
                        </Link>
                        <Link href='https://www.linkedin.com/in/willzawang/' isExternal>
                            <Icon as={FaLinkedin} boxSize={6} />                    
                        </Link>
                    </HStack>
                </VStack>
            </Container>
        </Box>
    );
}

export default Sidebar;