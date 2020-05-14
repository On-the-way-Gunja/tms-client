import React from "react";
import { Stack, Input, Flex } from "@chakra-ui/core";

// TODO: Now, add state management
// TODO: and need to make lots of drivers, stuffs available.

const DriversFormItem = ({ values, onChangeInputs }: any) => {
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

const DriversForms = ({ drivers, onChangeInputs }: any) => {
  return (
    <Flex flexDirection="column">
      {drivers.map(({ values }: any) => (
        <DriversFormItem values={values} onChangeInputs={onChangeInputs} />
      ))}
    </Flex>
  );
};

export default DriversForm;
