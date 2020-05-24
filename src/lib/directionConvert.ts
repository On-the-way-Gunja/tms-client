import { LatLongPairArray } from "../components/NaverMap/MapDiv";

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
