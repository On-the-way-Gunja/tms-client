import React from "react";
import { Stack, Input, Flex } from "@chakra-ui/core";
import { Field, reduxForm } from "redux-form";

// TODO: Now, add state management
// TODO: and need to make lots of drivers, stuffs available.

const StuffFormItem = ({ values, onChangeInputs }: any) => {
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

const StuffForms = ({ stuffs, onChangeInputs }: any) => {
  return (
    <Flex flexDirection="column">
      {stuffs.map(({ values }: any) => (
        <StuffFormItem values={values} onChangeInputs={onChangeInputs} />
      ))}
    </Flex>
  );
};

export default StuffForms;
