import { Button, ButtonGroup, Stack, Box, Flex, Center, Image, Text } from '@chakra-ui/react'
// import './MenuItem.css'

// export const MenuItem_drink = ({ drink, clickFn }) => {
//     return (
//         <Stack direction='column'>
//             <Box
//                 display='flex'
//                 // alignItems='left-aligned'
//                 // justifyContent='left-aligned'
//                 width='100%'
//                 py={1}
//                 // bgImage="url('https://bit.ly/2Z4KKcF')"
//                 // bgPosition='left-aligned'
//                 bgRepeat='no-repeat'
//                 mb={1}
//             >
//             </Box>
//             {/* <ButtonGroup variant='outline' spacing='6'> */}

//             < Button
//                 // className="MenuItem" 
//                 onClick={() => clickFn(drink)}
//                 colorScheme='blackAlpha'
//                 size='lg'
//                 textColor='#7c856ede'
//                 height={20}
//                 variant='ghost'
//                 leftIcon={< img src={drink.imgUrl} width={40} height={30} alt={drink.alt} />}
//                 rightIcon={drink.name}
//             >
//             </ Button>
//             {/* </ButtonGroup > */}
//         </Stack>
//     );
// }

export const MenuItem_drink = ({ drink, clickFn }) => {
    return (
        <Flex justifyItems={'center'} gap='2'
            direction={'column'} w={'100%'} h={'absolute'}
            spacing={4}
            p={[5, 10], [2, 4]}
        >
            <ButtonGroup
                borderRadius={20}
                shadow={'md'}
                bg={'whiteAlpha.400'}
            >
                <Button
                    onClick={() => clickFn(drink)}
                    colorScheme='blackAlpha'
                    borderRadius={15}
                    size={'md'}
                    height={20}
                    width={'100%'}
                    variant='ghost'
                    spacing={4}
                    // leftIcon={< img src={drink.imgUrl} width={40} height={30} alt={drink.alt} />}
                    // rightIcon={drink.name}
                    paddingBlock={2}
                    cursor={'pointer'}
                >
                    < Center gap={4}>
                        < Image src={drink.imgUrl} height={50} alt={drink.alt} />
                        < Text textColor={'blackAlpha.600'}> {drink.name}</Text>
                    </ Center>
                </Button>
            </ButtonGroup>
        </Flex>
    );
}