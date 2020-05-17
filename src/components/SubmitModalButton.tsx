import React from "react";
import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  useDisclosure,
} from "@chakra-ui/core";

export type SubmitModalButtonProps = {
  modalBody: React.ReactNode;
  onSubmit: (name: string) => void;
};

const SubmitModalButton = ({ modalBody, onSubmit }: SubmitModalButtonProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const onSubmitClick = async () => {
    onOpen();
    onSubmit("test");
  };
  return (
    <>
      <Button
        type="submit"
        onClick={onSubmitClick}
        borderRadius={0}
        width="100%"
      >
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

export default SubmitModalButton;
