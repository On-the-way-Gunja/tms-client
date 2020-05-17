import React from "react";
import { Box, Flex, Button } from "@chakra-ui/core";
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm } from "redux-form";

export type ApiFormTemplateProps = {
  children: React.ReactNode;
};

const ApiForm = (props: any) => {
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

export default reduxForm({
  form: "apiForm", // a unique identifier for this form
})(ApiForm);
