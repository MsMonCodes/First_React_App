import { Box, Center, Flex, Heading, Text } from '@chakra-ui/react'
import viteLogo from '/vite.svg'
import './App.css'
// import './components/DrinkButtons.jsx'
// import { DrinkButtons } from './components/DrinkButtons.jsx'
// import { coffee, tea } from './utils/data.js'
import { DrinkChoice } from './components/DrinkChoice.jsx'
import { useState } from 'react'
import { DrinkSearch } from './components/DrinkSearch.jsx'

export const App = () => {
  const heroText = "Hello kaasling";
  const greeting = "Welcome to the KaasKlub!";
  const description = <p>This KKlub is going to change your life.</p>;
  const [userDrink, setUerDrink] = useState();
  const drinksHeader = "Drink menu";
  const choiceHeader = "Your choice:";

  return (
    <Flex className='App' justifyContent={"center"} bg={'hsla(83, 9%, 95%, 0.871)'} width={'100%'} >
      {userDrink ? (
        <Box padding={8}>
          <Heading paddingBlock={4} mb={8} fontSize={"3xl"} color={'gray.600'}>{choiceHeader}</Heading>
          <DrinkChoice drink={userDrink} clickFn={setUerDrink} />
        </Box>
      ) : (
        <Box>
          <Box margin={6} paddingBlock={6} justifyItems={"center"}>
            <Heading marginBottom={12} fontSize={"6xl"} color={'gray.700'}>{heroText}</Heading>
            <Heading marginBottom={4} fontSize={"2xl"} color={'gray.600'}>{greeting}</Heading>
            <Text marginBottom={6} color={'gray.500'}>{description}</Text>
          </Box>
          <Heading fontSize={"3xl"} color={'gray.600'}>{drinksHeader}</Heading>
          <DrinkSearch clickFn={setUerDrink} />
        </Box>
      )}
    </Flex>
  );
};