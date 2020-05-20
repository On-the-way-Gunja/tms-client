/*global kakao*/
import React, { useEffect } from "react";
import { Box } from "@chakra-ui/core";

declare global {
  interface Window {
    kakao: any;
  }
}

const MapBox = () => {
  useEffect(() => {
    let container = document.getElementById("map");
    let options = {
      center: new window.kakao.maps.LatLng(33.450701, 126.570667),
      level: 3,
    };

    let map = new window.kakao.maps.Map(container, options);
  }, []);

  return (
    <>
      <Box id="map" width="500px" height="400px"></Box>
    </>
  );
};

export default MapBox;
