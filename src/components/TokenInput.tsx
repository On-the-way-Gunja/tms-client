import React from "react";
import { Box, FormLabel, Input, Button, Flex } from "@chakra-ui/core";
import { Field, reduxForm } from "redux-form";

const renderField = ({ input, label, type }: any) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Box>
      <Input {...input} type={type} placeholder={label} />
    </Box>
  </Box>
);

const TokenInput = (props: any) => {
  const { handleSubmit } = props;
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
          <form onSubmit={handleSubmit}>
            <Box padding={3}>
              <Field
                name={`key`}
                type="text"
                component={renderField}
                label="Key"
              />
            </Box>
            <Button width="100%" type="submit">
              Submit
            </Button>
          </form>
        </Box>
      </Box>
    </>
  );
};

export default reduxForm<{}>({
  form: "tokenInput", // a unique identifier for this form
})(TokenInput);
