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
    SiHtml5,
    SiCss3,
    SiArduino,
} from 'react-icons/si'


function SkillLib(){
    return(

        <VStack w='300px'>
            <HStack w='full' justifyContent='space-between'>
                <Text>Languages:</Text>
                <HStack>
                    <Icon as={IoLogoPython} boxSize={7}/>
                    <Icon as={IoLogoJavascript} boxSize={7}/>
                    <Icon as={SiHtml5} boxSize={7}/>
                    <Icon as={SiCss3} boxSize={7}/>
                    <Icon as={SiCplusplus} boxSize={7}/>
                </HStack>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
                <Text>Framework/Lib:</Text>
                <HStack>
                    <Icon as={SiFlask} boxSize={7}/>
                    <Icon as={SiBootstrap} boxSize={7}/>
                    <Icon as={SiReact} boxSize={7}/>
                </HStack>
            </HStack>
            <HStack w='full' justifyContent='space-between'>
                <Text>Other:</Text>
                <HStack>
                    <Icon as={SiPostgresql} boxSize={7}/>
                    <Icon as={SiMysql} boxSize={7}/>
                    <Icon as={SiArduino} boxSize={7}/>
                </HStack>
            </HStack>


        </VStack>

    )
};

export default SkillLib