import React from "react";
import Layout from "../Layout";
import { Box } from "@chakra-ui/core";
import { RenderAfterNavermapsLoaded } from "react-naver-maps";
import MapDiv from "./MapDiv";

const Map = () => {
  return (
    <Layout>
      <Box width="100%" height="100vh">
        <RenderAfterNavermapsLoaded
          ncpClientId={process.env.REACT_APP_NAVER_MAP_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <MapDiv
            width="100%"
            height="100vh"
            defaultCenterLat={37.554722}
            defaultCenterLong={126.970833}
          />
        </RenderAfterNavermapsLoaded>
      </Box>
    </Layout>
  );
};

export default Map;
