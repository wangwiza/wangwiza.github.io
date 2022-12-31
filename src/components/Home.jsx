import * as React from 'react'
import {
    Box,
  } from '@chakra-ui/react'
import Sidebar from './Sidebar';
import Content from './Content';

function Home() {
    // main structure of website
    return (
        <Box>
            <Sidebar />
            <Box ml='10rem' h='100%'>
                <Content />
            </Box>

        </Box>
    )
}
export default Home;