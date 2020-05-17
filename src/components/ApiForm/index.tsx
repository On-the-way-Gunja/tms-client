import React from "react";
import { Box, Flex, Button } from "@chakra-ui/core";
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm, InjectedFormProps } from "redux-form";

type CustomProps = {
  actions?: any;
  loadingToken?: any;
  loadingData?: any;
};

const ApiForm: React.FC<CustomProps & InjectedFormProps<{}, CustomProps>> = (
  props: any
) => {
  const { handleSubmit, reset } = props;

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
        <form onSubmit={handleSubmit}>
          <DriversForm />
          <StuffsForm />
          <Button type="submit">Submit</Button>
          <Button type="button" onClick={reset}>
            Clear Values
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "apiForm", // a unique identifier for this form
})(ApiForm);
