import React from "react";
import { NaverMap, Polyline, Marker } from "react-naver-maps";
import { DriverPath, Place } from "../ApiForm";

declare global {
  interface Window {
    naver: any;
  }
}

export type LatLongPair = {
  lat: number;
  long: number;
};

export type LatLongPairArray = LatLongPair[];

// array shape is like [{lat: 123.456, long: 123,4565}, {lat: 123.152, long: 195.125}, ...]

// FIXME: Need to fix lat and long after deployed.
const arrayToPath = (arr: LatLongPairArray, navermaps: any) => {
  console.log("arr is", arr);
  const res = arr.map(
    (pair: LatLongPair) => new navermaps.LatLng(pair.long, pair.lat)
  );
  console.log(res);
  return res;
};

type MapDivProps = {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  defaultCenterLat?: number;
  defaultCenterLong?: number;
  defaultZoom?: number;
  driverPathArray?: DriverPath[];
};

const MapDiv = ({
  children,
  width,
  height,
  defaultCenterLat,
  defaultCenterLong,
  defaultZoom,
  driverPathArray,
}: MapDivProps) => {
  const navermaps = window.naver.maps;

  console.log(driverPathArray);

  return (
    <NaverMap
      mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
      style={{
        width, // 네이버지도 가로 길이
        height, // 네이버지도 세로 길이
      }}
      defaultCenter={{ lat: defaultCenterLat, lng: defaultCenterLong }} // 지도 초기 위치
      defaultZoom={defaultZoom} // 지도 초기 확대 배율
    >
      {/* <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {
          alert("여기는 N서울타워입니다.");
        }}
      /> */}
      {/* <Polyline
        path={path && arrayToPath(path, navermaps)}
        // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
        strokeColor={"#5347AA"}
        strokeStyle={"solid"}
        strokeOpacity={1}
        strokeWeight={5}
      />
      {path && getStartEndMarker(path, navermaps)} */}
      {driverPathArray &&
        driverPathArray.map((driverPath: DriverPath, index: number) => (
          <>
            <Polyline
              path={arrayToPath(driverPath.path, navermaps)}
              strokeColor={driverPath.color}
              strokeStyle={"solid"}
              strokeOpacity={1}
              strokeWeight={5}
            />
            <>
              {driverPath.places.map((place: Place, index: number) => (
                <Marker
                  position={new navermaps.LatLng(place.lat, place.long)}
                  animation={2}
                  onClick={() => {
                    alert(`여기는 ${place.id}입니다.`);
                  }}
                />
              ))}
            </>
          </>
        ))}
      {children}
    </NaverMap>
  );
};

MapDiv.defaultProps = {
  width: "100%",
  height: "100vh",
  defaultCenterLat: 37.3646656,
  defaultCenterLong: 127.108828,
  defaultZoom: 15,
  path: [
    { lat: 37.365620929135716, long: 127.1036195755005 },
    { lat: 37.365620929135716, long: 127.11353302001953 },
    { lat: 37.3606921307849, long: 127.10452079772949 },
    { lat: 37.36821310838941, long: 127.10814714431763 },
    { lat: 37.360760351656545, long: 127.11299657821654 },
  ],
};

export default MapDiv;
