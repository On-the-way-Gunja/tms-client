import React from "react";
import {
  Stack,
  Input,
  Box,
  FormLabel,
  Button,
  List,
  ListItem,
  Heading,
  Divider,
} from "@chakra-ui/core";
import { Field, FieldArray } from "redux-form";

// TODO: Now, add state management
// TODO: and need to make lots of drivers, stuffs available.

// const StuffFormItem = ({ values, onChangeInputs }: any) => {
//   return (
//     <>
//       <Stack spacing={3} padding={3}>
//         <Input placeholder="id" />
//         <Input placeholder="recver_name" />
//         <Input placeholder="recver_position_id" />
//         <Input placeholder="recver_position_lat" />
//         <Input placeholder="recver_position_long" />
//         <Input placeholder="sender_name" />
//         <Input placeholder="sender_position_id" />
//         <Input placeholder="sender_position_lat" />
//         <Input placeholder="sender_position_long" />
//       </Stack>
//     </>
//   );
// };

// const StuffForms = ({ stuffs, onChangeInputs }: any) => {
//   return (
//     <Flex flexDirection="column">
//       {stuffs.map(({ values }: any) => (
//         <StuffFormItem values={values} onChangeInputs={onChangeInputs} />
//       ))}
//     </Flex>
//   );
// };

// export default StuffForms;

const renderField = ({ input, label, type }: any) => (
  <Box>
    <FormLabel>{label}</FormLabel>
    <Box>
      <Input {...input} type={type} placeholder={label} />
    </Box>
  </Box>
);

const renderStuffs = ({ fields }: any) => (
  <Stack spacing={3} padding={3}>
    <Button variantColor="green" onClick={() => fields.push({})}>
      Add Stuff
    </Button>
    <List>
      {fields.map((driver: any, index: any) => (
        <ListItem key={index}>
          <Stack spacing={3} marginBottom={3}>
            <Button variantColor="red" onClick={() => fields.remove(index)}>
              Remove Stuff #{index + 1}
            </Button>
            <Heading as="h4" size="md">
              Stuff #{index + 1}
            </Heading>

            <Field
              name={`${driver}.id`}
              type="text"
              component={renderField}
              label="id"
            />
            <Field
              name={`${driver}.recver_name`}
              type="text"
              component={renderField}
              label="recver_name"
            />
            <Field
              name={`${driver}.recver_position_id`}
              type="text"
              component={renderField}
              label="recver_position_id"
            />
            <Field
              name={`${driver}.recver_position_lat`}
              type="text"
              component={renderField}
              label="recver_position_lat"
            />
            <Field
              name={`${driver}.recver_position_long`}
              type="text"
              component={renderField}
              label="recver_position_long"
            />
            <Field
              name={`${driver}.sender_name`}
              type="text"
              component={renderField}
              label="sender_name"
            />
            <Field
              name={`${driver}.sender_position_id`}
              type="text"
              component={renderField}
              label="sender_position_id"
            />
            <Field
              name={`${driver}.sender_position_lat`}
              type="text"
              component={renderField}
              label="sender_position_lat"
            />
            <Field
              name={`${driver}.sender_position_long`}
              type="text"
              component={renderField}
              label="sender_position_long"
            />
          </Stack>
          {index === fields.length - 1 ? <></> : <Divider />}
        </ListItem>
      ))}
    </List>
  </Stack>
);

const StuffsForm = (props: any) => {
  return <FieldArray name="stuffs" component={renderStuffs} />;
};

// export default StuffsForm;
// export default reduxForm({
//   form: "stuffsForm", // a unique identifier for this form
// })(StuffsForm);
export default StuffsForm;
