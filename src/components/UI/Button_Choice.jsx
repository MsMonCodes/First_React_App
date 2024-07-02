import { Button, Flex, Grid } from '@chakra-ui/react'
// import './Button_Choice.css';

export const Button_Choice = ({ text, clickFn }) => {
    return (
        <>
            <Button onClick={clickFn}
                colorScheme='blackAlpha'
                borderRadius={15}
                size='mg'
                color={'blackAlpha.600'}
                bg={'whiteAlpha.400'}
                shadow={'md'}
                height={10}
                width={'100%'}
                padding={4}
                variant={'ghost'}
                // leftIcon={< img src={drink.imgUrl} width={40} height={30} alt={drink.alt} />}
                // rightIcon={drink.name}
                marginBottom={8}
                marginTop={-4}
                cursor={'pointer'}>
                {text}
            </Button>
        </>
    );
};