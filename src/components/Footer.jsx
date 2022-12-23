import React from "react";
import { Text } from '@chakra-ui/react'

function Footer() {
    const year = new Date().getFullYear();
    return (
        <Text>
            &copy; {new Date().getFullYear()} William Wang, Inc. All rights reserved.
        </Text>
    );
}

export default Footer;