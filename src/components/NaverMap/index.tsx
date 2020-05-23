import React from "react";
import Layout from "../Layout";
import { Box } from "@chakra-ui/core";
import { RenderAfterNavermapsLoaded, NaverMap } from "react-naver-maps";

const Map = () => {
  return (
    <Layout>
      <Box width="100%" height="100%">
        <RenderAfterNavermapsLoaded
          ncpClientId={process.env.REACT_APP_NAVER_MAP_KEY} // 자신의 네이버 계정에서 발급받은 Client ID
          error={<p>Maps Load Error</p>}
          loading={<p>Maps Loading...</p>}
        >
          <NaverMap
            mapDivId={"maps-getting-started-uncontrolled"} // default: react-naver-map
            style={{
              width: "100%", // 네이버지도 가로 길이
              height: "100vh", // 네이버지도 세로 길이
            }}
            defaultCenter={{ lat: 37.554722, lng: 126.970833 }} // 지도 초기 위치
            defaultZoom={13} // 지도 초기 확대 배율
          />
        </RenderAfterNavermapsLoaded>
      </Box>
    </Layout>
  );
};

export default Map;
