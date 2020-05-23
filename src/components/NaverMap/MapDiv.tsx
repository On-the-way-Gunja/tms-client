import React from "react";
import { NaverMap, Polyline, Marker } from "react-naver-maps";

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
const arrayToPath = (arr: LatLongPairArray, navermaps: any) => {
  return arr.map(
    (pair: LatLongPair) => new navermaps.LatLng(pair.lat, pair.long)
  );
};

const getStartEndMarker = (arr: LatLongPairArray, navermaps: any) => {
  return [
    <Marker
      key={0}
      position={new navermaps.LatLng(arr[0].lat, arr[0].long)}
      animation={2}
      onClick={() => {
        alert("이곳이 출발지입니다");
      }}
    />,
    <Marker
      key={1}
      position={
        new navermaps.LatLng(arr[arr.length - 1].lat, arr[arr.length - 1].long)
      }
      animation={2}
      onClick={() => {
        alert("이곳이 도착지입니다");
      }}
    />,
  ];
};

type MapDivProps = {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  defaultCenterLat?: number;
  defaultCenterLong?: number;
  defaultZoom?: number;
  path?: LatLongPairArray;
};

const MapDiv = ({
  children,
  width,
  height,
  defaultCenterLat,
  defaultCenterLong,
  defaultZoom,
  path,
}: MapDivProps) => {
  const navermaps = window.naver.maps;

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
      <Polyline
        path={path && arrayToPath(path, navermaps)}
        // clickable // 사용자 인터랙션을 받기 위해 clickable을 true로 설정합니다.
        strokeColor={"#5347AA"}
        strokeStyle={"solid"}
        strokeOpacity={1}
        strokeWeight={5}
      />
      {path && getStartEndMarker(path, navermaps)}
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
