import React from "react";
import Layout from "../Layout";
import { Box } from "@chakra-ui/core";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import MapDiv, { LatLongPairArray } from "./MapDiv";

type MapProps = {
  path?: LatLongPairArray;
  width: string;
  height: string;
};

const Map = ({ path, width, height }: MapProps) => {
  return (
    <Layout>
      <Box width={width} height={height}>
        <RenderAfterNavermapsLoaded
          ncpClientId={process.env.REACT_APP_NAVER_MAP_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <MapDiv
            width="100%"
            height="100%"
            defaultCenterLat={37.3646656}
            defaultCenterLong={127.108828}
            path={path}
          />
        </RenderAfterNavermapsLoaded>
      </Box>
    </Layout>
  );
};

export default Map;

Map.defaultProps = {
  width: "100%",
  height: "100vh",
};
