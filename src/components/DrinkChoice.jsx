import { Button, Text, Image, Center, SimpleGrid, Grid } from "@chakra-ui/react";
import { Button_Choice } from "./UI/Button_Choice";

export const DrinkChoice = ({ drink, clickFn }) => {
    return (
        <Grid justifyItems={"center"} gap={4}>
            <Text color={'gray.600'}>{drink.name}</Text>
            < Image src={drink.imgUrl} alt={drink.alt} width='100px' height='100pxh' />
            <Text color={'gray.600'} paddingBlock={6}>Your drink wil be ready in a few minutes</Text>
            < Button_Choice textColor={'blackAlpha.600'} text={'Change selection'} clickFn={() => clickFn()} />
        </Grid>
    );
};