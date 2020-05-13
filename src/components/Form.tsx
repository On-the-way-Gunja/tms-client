import React from "react";
import {
  Stack,
  Input,
  useDisclosure,
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
} from "@chakra-ui/core";
import Lorem from "react-lorem-component";

export const ApiForm = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Stack spacing={3} padding={3}>
        <Text>Drivers</Text>
        <Input placeholder="avail_radius" />
        <Input placeholder="id" />
        <Input placeholder="position_id" />
        <Input placeholder="position_lat" />
        <Input placeholder="position_long" />
        <Text>Stuffs</Text>
      </Stack>
      <Button onClick={onOpen} borderRadius={0} width="100%">
        Submit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Lorem count={2} />
          </ModalBody>

          <ModalFooter>
            <Button variantColor="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};
