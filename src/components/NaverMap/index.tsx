import React from "react";
import { Box } from "@chakra-ui/core";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import MapDiv from "./MapDiv";
import { DriverPath } from "../ApiForm";

type MapProps = {
  driverPathArray?: DriverPath[];
  width: string;
  height: string;
};

const Map = ({ driverPathArray, width, height }: MapProps) => {
  return (
    <Box width={width} height={height}>
      <RenderAfterNavermapsLoaded
        ncpClientId={process.env.REACT_APP_NAVER_MAP_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
        error={<p>Maps Load Error</p>}
        loading={<p>Maps Loading...</p>}
      >
        <MapDiv
          width="100%"
          height="100%"
          defaultCenterLat={
            driverPathArray
              ? driverPathArray[0].places[0].lat
              : 37.56946547219505
          }
          defaultCenterLong={
            driverPathArray
              ? driverPathArray[0].places[0].long
              : 127.01168167917474
          }
          driverPathArray={driverPathArray}
        />
      </RenderAfterNavermapsLoaded>
    </Box>
  );
};

export default Map;

Map.defaultProps = {
  width: "100%",
  height: "100vh",
};
