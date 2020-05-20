import React from "react";
import MapBox from "./MapBox";
import Layout from "../Layout";
import { Box } from "@chakra-ui/core";

const KakaoMap = () => {
  return (
    <Layout>
      <Box width="100%" height="100%">
        <MapBox width="100%" height="100vh" />
      </Box>
    </Layout>
  );
};

export default KakaoMap;
