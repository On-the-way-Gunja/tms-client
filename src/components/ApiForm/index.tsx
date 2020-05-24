import React from "react";
import { Box, Flex, Button } from "@chakra-ui/core";
import DriversForm from "./DriversForm";
import StuffsForm from "./StuffsForm";
import { reduxForm, InjectedFormProps } from "redux-form";
import NaverMap from "../NaverMap";
import {
  convertToLatLongPairArray,
  stringToColour,
  LatLongFromNaverArray,
} from "../../lib/directionConvert";
import { LatLongPairArray } from "../NaverMap/MapDiv";

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

const calculateFromActions = (actions: any, naver_every_result: any) => {
  let DriverPathArray: DriverPath[] = [];
  for (let driver in actions) {
    let newDriverPath: DriverPath = {
      id: driver,
      places: actions[driver].map((place: any) => ({
        id: place.coordinate.id,
        lat: place.coordinate.lat,
        long: place.coordinate.long,
      })),
      path: [],
      color: stringToColour(driver),
    };

    let pathKey: string[] = [];
    const placesFromDriver = newDriverPath.places;
    for (let i = 0; i < placesFromDriver.length - 1; i++) {
      pathKey.push(`${placesFromDriver[i].id}-${placesFromDriver[i + 1].id}`);
    }
    // console.log(pathKey);

    let pathFromApi: LatLongFromNaverArray = [];
    pathKey.forEach((key: string) => {
      const res = naver_every_result.find((item: any) => {
        // console.log("key is", key, "Id is", item.Id);
        return key === item.Id;
      });
      // console.log(res);
      if (res !== undefined)
        pathFromApi = [
          ...pathFromApi,
          ...res.ApiResult.route.traoptimal[0].path,
        ];

      // naver_every_result.forEach((item: any) => {
      //   // console.log(item);
      //   console.log("key is", key, "item id is", item.Id);
      //   if (key === item.Id) {
      //     pathFromApi = [
      //       ...pathFromApi,
      //       ...item.ApiResult.route.traoptimal[0].path,
      //     ];
      //     console.log("Matched!! key is", key, "item id is", item.Id);
      //   }
      // });
    });
    newDriverPath.path = convertToLatLongPairArray(pathFromApi);

    DriverPathArray.push(newDriverPath);
  }
  // console.log("driver path array is", DriverPathArray);
  return DriverPathArray;
};

// asyncFunction1()
//   .then(function(result) {
//     return asyncFunction2()
//   })

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
