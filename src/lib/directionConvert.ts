// Original : [[127.0418402,37.5451085],[127.0456866,37.5593968]]
// Converted : [{127.0418402,37.5451085},{127.0456866,37.5593968}]

type LatLongFromNaver = [number, number];
type LatLongFromNaverArray = LatLongFromNaver[];

export const convertToLatLongPairArray = (
  arrayFromNaver: LatLongFromNaverArray
) => {
  return arrayFromNaver.map((value: LatLongFromNaver) => ({
    lat: value[0],
    long: value[1],
  }));
};
