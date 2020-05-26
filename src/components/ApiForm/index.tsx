import React from "react";
import {
  Box,
  Flex,
  Button,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
} from "@chakra-ui/core";
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm, InjectedFormProps } from "redux-form";
import NaverMap from "../NaverMap";
import { calculateFromActions } from "../../lib/directionConvert";
import { LatLongPairArray } from "../NaverMap/MapDiv";
import JsonForm from "./JsonForm";

type CustomProps = {
  actions?: any;
  naver_actual_result?: any;
  naver_every_result?: any;
  loadingToken?: any;
  loadingData?: any;
  token?: any;
  submitted?: any;
  onClear?: any;
};

export type Place = {
  id: string;
  lat: number;
  long: number;
};

export type DriverPath = {
  id: string;
  places: Place[];
  path: LatLongPairArray;
  color: string;
};

const ApiForm: React.FC<CustomProps & InjectedFormProps<{}, CustomProps>> = (
  props: any
) => {
  const {
    onClear,
    handleSubmit,
    reset,
    actions,
    naver_every_result,
    submitted,
  } = props;

  const handleReset = (event: any) => {
    event.preventDefault();
    reset();
    onClear();
  };

  const handleTabChange = () => {
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
        <Box backgroundColor="white" paddingTop={3}>
          <Tabs isFitted variant="enclosed" onChange={handleTabChange}>
            <TabList mb="1em">
              <Tab>List Form</Tab>
              <Tab>JSON Form</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <form onSubmit={handleSubmit}>
                  <DriversForm />
                  <StuffsForm />
                  <Button type="submit">Submit</Button>
                  <Button type="button" onClick={handleReset}>
                    Clear Values
                  </Button>
                </form>
              </TabPanel>
              <TabPanel>
                <form onSubmit={handleSubmit}>
                  <JsonForm />
                  <Button type="submit">Submit</Button>
                  <Button type="button" onClick={handleReset}>
                    Clear Values
                  </Button>
                </form>
              </TabPanel>
            </TabPanels>
          </Tabs>

          {submitted && (
            <NaverMap
              width="100%"
              height="512px"
              driverPathArray={calculateFromActions(
                actions,
                naver_every_result
              )}
            />
          )}
        </Box>
      </Box>
    </>
  );
};

export default reduxForm<{}, CustomProps>({
  form: "apiForm", // a unique identifier for this form
})(ApiForm);
