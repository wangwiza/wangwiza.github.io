import * as React from 'react'
import { Link, useColorModeValue } from '@chakra-ui/react'

function LinkItem({href, path, target, children, ...props}){

    return (
        <Link
            p={2}
            color={useColorModeValue('gray200', 'whiteAlpha.900')}
            target={target}
            {...props}
        >
            {children}
        </Link>
    )
}

export default LinkItem;