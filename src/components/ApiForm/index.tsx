import React from "react";
import {
  Box,
  Flex,
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
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm, InjectedFormProps } from "redux-form";

type CustomProps = {
  actions?: any;
  loadingToken?: any;
  loadingData?: any;
  token?: any;
};

const ApiForm: React.FC<CustomProps & InjectedFormProps<{}, CustomProps>> = (
  props: any
) => {
  const {
    handleSubmit,
    reset,
    actions,
    token,
    loadingToken,
    loadingData,
  } = props;
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleSubmitWithModal = (event: any) => {
    event.preventDefault();
    handleSubmit();
    onOpen();
  };

  return (
    <Box
      width="512px"
      marginLeft="auto"
      marginRight="auto"
      marginTop="6rem"
      marginBottom="6rem"
      borderRadius="5px"
      overflow="hidden"
    >
      <Flex
        alignItems="center"
        justifyContent="center"
        background="#258c91"
        color="white"
        height="4rem"
        fontSize="1.5rem"
      >
        API Form
      </Flex>
      <Box backgroundColor="white">
        <form onSubmit={handleSubmitWithModal}>
          <DriversForm />
          <StuffsForm />
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={reset}>
            Clear Values
          </Button>
        </form>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay />
          <ModalContent>
            <ModalHeader>Result</ModalHeader>
            <ModalCloseButton />
            <ModalBody>
              <Box>{loadingToken ? "토근 로딩중" : `token is ${token}`}</Box>
              <Box>
                {loadingData
                  ? "액션 로딩중"
                  : `actions is ${JSON.stringify(actions)}`}
              </Box>
            </ModalBody>

            <ModalFooter>
              <Button variantColor="blue" mr={3} onClick={onClose}>
                Close
              </Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </Box>
    </Box>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "apiForm", // a unique identifier for this form
})(ApiForm);
