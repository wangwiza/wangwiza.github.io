import * as React from 'react'
import { 
    Box,
    HStack,
    VStack,
    Text,
    Icon,

} from '@chakra-ui/react'
import {
    IoLogoJavascript,
    IoLogoPython,
} from 'react-icons/io'
import{
    SiCplusplus,
    SiFlask,
    SiBootstrap,
    SiReact,
    SiPostgresql,
    SiMysql,
    SiArduino,
} from 'react-icons/si'


function SkillLib(){
    return(

        <VStack w='300px'>
            <HStack w='full' justifyContent='space-between'>
                <Text>Languages:</Text>
                <HStack>
                    <Icon as={IoLogoPython} boxSize={10}/>
                    <Icon as={IoLogoJavascript} boxSize={10}/>
                    <Icon as={SiCplusplus} boxSize={10}/>
                </HStack>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
                <Text>Framework/Lib:</Text>
                <HStack>
                    <Icon as={SiFlask} boxSize={10}/>
                    <Icon as={SiBootstrap} boxSize={10}/>
                    <Icon as={SiReact} boxSize={10}/>
                </HStack>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
                <Text>Other:</Text>
                <HStack>
                    <Icon as={SiPostgresql} boxSize={10}/>
                    <Icon as={SiMysql} boxSize={10}/>
                    <Icon as={SiArduino} boxSize={10}/>
                </HStack>
            </HStack>


        </VStack>

    )
};

export default SkillLib