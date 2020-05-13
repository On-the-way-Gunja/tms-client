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
} from "@chakra-ui/core";

// TODO: Now, add state management
// TODO: and need to make lots of drivers, stuffs available.

export const DriversForm = () => {
  return (
    <>
      <Stack spacing={3} padding={3}>
        <Input placeholder="avail_radius" />
        <Input placeholder="id" />
        <Input placeholder="position_id" />
        <Input placeholder="position_lat" />
        <Input placeholder="position_long" />
      </Stack>
    </>
  );
};

export const StuffForm = () => {
  return (
    <>
      <Stack spacing={3} padding={3}>
        <Input placeholder="id" />
        <Input placeholder="recver_name" />
        <Input placeholder="recver_position_id" />
        <Input placeholder="recver_position_lat" />
        <Input placeholder="recver_position_long" />
        <Input placeholder="sender_name" />
        <Input placeholder="sender_position_id" />
        <Input placeholder="sender_position_lat" />
        <Input placeholder="sender_position_long" />
      </Stack>
    </>
  );
};

export type ModalButtonProps = {
  modalBody: React.ReactNode;
  getFromApi: (name: string) => void;
};

export const ModalButton = ({ modalBody, getFromApi }: ModalButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const onSubmitClick = async () => {
    onOpen();
    getFromApi("test");
  };
  return (
    <>
      <Button onClick={onSubmitClick} borderRadius={0} width="100%">
        Submit
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Result</ModalHeader>
          <ModalCloseButton />
          <ModalBody>{modalBody}</ModalBody>

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
