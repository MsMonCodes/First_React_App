// where the user can write text in an input field using the HTML <input> element

import { Center, Input } from '@chakra-ui/react'
import { color } from 'framer-motion'

export const TextInput = ({ changeFn, ...props }) => {
    return (
        <Center>
            {/* <label>
                Search for a drink:
            </label> */}
            <Input
                type="text"
                // className="textInput"
                onChange={changeFn}
                {...props}
                placeholder='Search for a drink'
                size='md'
                mt={8} mb={4}
                textAlign={'center'}
                htmlSize="20vw" width='auto'
                variant="flushed"
                justifyItems={"center"}

                // textColor={'gray.500'}
                // textColor={'blackAlpha.600'}
                borderColor='blackAlpha.200'
            >
            </Input>
        </Center >

    );
};