import React from "react";
import { Box, FormLabel, Textarea } from "@chakra-ui/core";
import { Field } from "redux-form";

const renderField = ({ input, label, type }: any) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Box>
      <Textarea
        height={"50vh"}
        resize={"none"}
        {...input}
        type={type}
        placeholder={label}
      />
    </Box>
  </Box>
);

const JsonForm = (props: any) => {
  return (
    <>
      <Box padding={3}>
        <Field
          name={`jsonInput`}
          type="text"
          component={renderField}
          label="JSON input"
        />
      </Box>
    </>
  );
};

export default JsonForm;
