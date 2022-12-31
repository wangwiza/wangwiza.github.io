import * as React from 'react'
import {
    Center, 
    Button,
    Heading,
    VStack,
    LinkBox,
    LinkOverlay,
} from '@chakra-ui/react'
import { EmailIcon } from '@chakra-ui/icons';

function Contact(){
    return (
        <Center
            w='100%'
            h='100%'
        >
            <VStack>
                <Heading>I wonder what this button does...</Heading>
                <LinkBox>
                    <LinkOverlay href='mailto:wzaw.wang@gmail.com'>
                        <Button 
                            leftIcon={<EmailIcon/>}
                        >
                            Contact Me
                        </Button>
                    </LinkOverlay>
                </LinkBox>
            </VStack>
        </Center>
    )
};

export default Contact;