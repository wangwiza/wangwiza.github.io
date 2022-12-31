import * as React from 'react'
import {
    SimpleGrid,

} from '@chakra-ui/react'
import { WorkItem } from './WorkItem'
import modPhy from '../images/modphy.png'
import arduino from '../images/arduino.png'
import bookCrud from '../images/bookCrud.png'
import cssSite from '../images/csssite.png'

function Works(){
    return (
        <SimpleGrid columns={[1,2,2]} gap={6}>
            <WorkItem
                href="https://github.com/wangwiza/modeling-physics"
                title="Modeling Physics"
                thumbnail={modPhy}
            >
                Simulating dynamics & kinematics.
            </WorkItem>
            <WorkItem
                href="https://github.com/wangwiza/arduino-circuits"
                title="Arduino Circuits"
                thumbnail={arduino}
            >
                Traffic lights and much more!
            </WorkItem>
            <WorkItem
                href="https://github.com/wangwiza/book-list-crud"
                title="Book List Crud"
                thumbnail={bookCrud}
            >
                Testing Flask and MySQL.
            </WorkItem>
            <WorkItem
                href="https://github.com/wangwiza/book-list-crud"
                title="CSS Portfolio"
                thumbnail={cssSite}
            >
                Practicing basic WebDev.
            </WorkItem>

            
        </SimpleGrid>
    )
}

export default Works;