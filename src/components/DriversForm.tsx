import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";
import {
  Box,
  FormLabel,
  Stack,
  Input,
  Button,
  List,
  ListItem,
  Heading,
  Divider,
} from "@chakra-ui/core";

// TODO: Now, add state management
// TODO: and need to make lots of drivers, stuffs available.

// const DriversFormItem = ({ values, onChangeInputs }: any) => {
//   return (
//     <>
//       <Stack spacing={3} padding={3}>
//         <Input placeholder="avail_radius" />
//         <Input placeholder="id" />
//         <Input placeholder="position_id" />
//         <Input placeholder="position_lat" />
//         <Input placeholder="position_long" />
//       </Stack>
//     </>
//   );
// };

// const DriversForms = ({ drivers, onChangeInputs }: any) => {
//   return (
//     <Flex flexDirection="column">
//       {drivers.map(({ values }: any) => (
//         <DriversFormItem values={values} onChangeInputs={onChangeInputs} />
//       ))}
//     </Flex>
//   );
// };

const renderField = ({ input, label, type }: any) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Box>
      <Input {...input} type={type} placeholder={label} />
    </Box>
  </Box>
);

const renderDrivers = ({ fields }: any) => (
  <Stack spacing={3} padding={3}>
    <Button variantColor="green" onClick={() => fields.push({})}>
      Add Driver
    </Button>
    <List>
      {fields.map((driver: any, index: any) => (
        <ListItem key={index}>
          <Stack spacing={3} marginBottom={3}>
            <Button variantColor="red" onClick={() => fields.remove(index)}>
              Remove Driver #{index + 1}
            </Button>
            <Heading as="h4" size="md">
              Driver #{index + 1}
            </Heading>
            <Field
              name={`${driver}.avail_radius`}
              type="text"
              component={renderField}
              label="avail_radius"
            />
            <Field
              name={`${driver}.id`}
              type="text"
              component={renderField}
              label="id"
            />
            <Field
              name={`${driver}.position_id`}
              type="text"
              component={renderField}
              label="position_id"
            />
            <Field
              name={`${driver}.position_lat`}
              type="text"
              component={renderField}
              label="position_lat"
            />
            <Field
              name={`${driver}.position_long`}
              type="text"
              component={renderField}
              label="position_long"
            />
          </Stack>
          {index === fields.length - 1 ? <></> : <Divider />}
        </ListItem>
      ))}
    </List>
  </Stack>
);

const DriversForm = (props: any) => {
  const { handleSubmit, reset } = props;
  return (
    <form onSubmit={handleSubmit}>
      <FieldArray name="drivers" component={renderDrivers} />
      <Box>
        <Button type="submit">Submit</Button>
        <Button type="button" onClick={reset}>
          Clear Values
        </Button>
      </Box>
    </form>
  );
};

// export default DriversForm;
export default reduxForm({
  form: "driversForm", // a unique identifier for this form
})(DriversForm);
