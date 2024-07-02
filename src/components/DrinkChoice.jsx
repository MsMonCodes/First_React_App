import { Button, Text, Image, Center, SimpleGrid, Grid, Flex, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, Heading, useDisclosure, ButtonGroup, Stack } from "@chakra-ui/react";
import { Button_Choice } from "./UI/Button_Choice";

export const DrinkChoice = ({ drink, clickFn }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    return (
        <Grid justifyItems={"center"} gap={4} marginBlockEnd={'100%'}>
            <Heading paddingBlock={4} fontSize={"2xl"} color={'gray.600'}>{drink.name}</Heading>
            < Image src={drink.imgUrl} alt={drink.alt} width='100px' height='100pxh' />
            <Text color={'gray.600'} paddingBlock={6}>Your drink wil be ready in a few minutes</Text>
            <Stack mt={12} width={'100%'} height={'100%'}>
                < Button_Choice textColor={'blackAlpha.600'} text={'Confirm order'} clickFn={onOpen} />
                < Button_Choice textColor={'blackAlpha.600'} text={'Change selection'} clickFn={() => clickFn()} />
            </Stack>

            <Modal isOpen={isOpen} onClose={onClose}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader>Confirm your order</ModalHeader>

                    <ModalCloseButton />

                    <ModalBody>
                        <Text>1 x {drink.name}</Text>
                    </ModalBody>

                    <ModalFooter gap={5} marginTop={5} marginBottom={-4}>
                        <Button_Choice text={'Confirm'} />
                        <Button_Choice clickFn={onClose} text={'Cancel'} />
                    </ModalFooter>
                </ModalContent>
            </Modal>
        </Grid>
    );
};