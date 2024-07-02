import { Button, Text, Image, Center, SimpleGrid, Grid, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading, useDisclosure, ButtonGroup } from "@chakra-ui/react";
import { Button_Choice } from "./UI/Button_Choice";

export const DrinkChoice = ({ drink, clickFn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Grid justifyItems={"center"} gap={4}>
            <Heading paddingBlock={4} mb={8} color={'gray.600'}>{drink.name}</Heading>
            < Image src={drink.imgUrl} alt={drink.alt} width='100px' height='100pxh' />
            <Text color={'gray.600'} paddingBlock={6}>Your drink wil be ready in a few minutes</Text>
            <ButtonGroup mt={4}>
                < Button_Choice textColor={'blackAlpha.600'} text={'Confirm order'} clickFn={onOpen} />
                < Button_Choice textColor={'blackAlpha.600'} text={'Change selection'} clickFn={() => clickFn()} />
            </ButtonGroup>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm your order</ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Text>1 x {drink.name}</Text>
                    </ModalBody>

                    <ModalFooter gap={5} marginTop={4} marginBottom={-4}>
                        <Button_Choice colorScheme="blue" mr={3} text={'Confirm'} />
                        <Button_Choice variant='ghost' clickFn={onClose} text={'Cancel'} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Grid>
    );
};