import React from "react";
import { Box, Flex, Button } from "@chakra-ui/core";
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm, InjectedFormProps } from "redux-form";
import NaverMap from "../NaverMap";

type CustomProps = {
  actions?: any;
  loadingToken?: any;
  loadingData?: any;
  token?: any;
  submitted?: any;
  onClear?: any;
};

const ApiForm: React.FC<CustomProps & InjectedFormProps<{}, CustomProps>> = (
  props: any
) => {
  const { onClear, handleSubmit, reset, actions, submitted } = props;

  const handleSubmitWithModal = (event: any) => {
    event.preventDefault();
    handleSubmit();
  };
  const handleReset = (event: any) => {
    event.preventDefault();
    reset();
    onClear();
  };

  return (
    <>
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
            <Button type="button" onClick={handleReset}>
              Clear Values
            </Button>
          </form>
          {submitted && (
            <Box
              width="512px"
              marginLeft="auto"
              marginRight="auto"
              marginTop="6rem"
              marginBottom="6rem"
              borderRadius="5px"
              overflow="hidden"
            >
              {`actions is ${JSON.stringify(actions)}`}
            </Box>
          )}
          <NaverMap width="100%" height="512px" />
        </Box>
      </Box>
    </>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "apiForm", // a unique identifier for this form
})(ApiForm);
