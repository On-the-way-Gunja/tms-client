import { LatLongPairArray } from "../components/NaverMap/MapDiv";
import { DriverPath } from "../components/ApiForm";

// Original : [[127.0418402,37.5451085],[127.0456866,37.5593968]]
// Converted : [{127.0418402,37.5451085},{127.0456866,37.5593968}]

export type LatLongFromNaver = [number, number];
export type LatLongFromNaverArray = LatLongFromNaver[];

export const convertToLatLongPairArray = (
  arrayFromNaver: LatLongFromNaverArray
): LatLongPairArray => {
  return arrayFromNaver.map((value: LatLongFromNaver) => ({
    lat: value[0],
    long: value[1],
  }));
};

export const stringToColour = (str: string) => {
  let hash = 0;
  for (let i = 0; i < str.length; i++) {
    hash = str.charCodeAt(i) + ((hash << 5) - hash);
  }
  let colour = "#";
  for (let i = 0; i < 3; i++) {
    let value = (hash >> (i * 8)) & 0xff;
    colour += ("00" + value.toString(16)).substr(-2);
  }
  return colour;
};

export const calculateFromActions = (actions: any, naver_every_result: any) => {
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
