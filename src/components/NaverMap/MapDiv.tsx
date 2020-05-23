import React from "react";
import { NaverMap, Marker } from "react-naver-maps";

declare global {
  interface Window {
    naver: any;
  }
}

type MapDivProps = {
  children?: React.ReactNode;
  width?: string;
  height?: string;
  defaultCenterLat?: number;
  defaultCenterLong?: number;
  defaultZoom?: number;
};

const MapDiv = ({
  children,
  width,
  height,
  defaultCenterLat,
  defaultCenterLong,
  defaultZoom,
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
      <Marker
        key={1}
        position={new navermaps.LatLng(37.551229, 126.988205)}
        animation={2}
        onClick={() => {
          alert("여기는 N서울타워입니다.");
        }}
      />
      {children}
    </NaverMap>
  );
};

MapDiv.defaultProps = {
  width: "100%",
  height: "100vh",
  defaultCenterLat: 37.554722,
  defaultCenterLong: 126.970833,
  defaultZoom: 13,
};

export default MapDiv;
