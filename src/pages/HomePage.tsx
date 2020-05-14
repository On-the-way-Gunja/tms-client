import React from "react";
import Layout from "../components/Layout";
import { ApiFormTemplate } from "../components/FormTemplate";
import { Text } from "@chakra-ui/core";
import Lorem from "react-lorem-component";
import SubmitModalButton from "../components/SubmitModalButton";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiFormTemplate>
        <Text paddingLeft={3} paddingTop={3}>
          Drivers
        </Text>
        {/* <DriversForm /> */}
        <Text paddingLeft={3} paddingTop={3}>
          Stuffs
        </Text>
        {/* <StuffForm /> */}
        <SubmitModalButton
          modalBody={<Lorem />}
          onSubmit={(name: string) => {
            console.log(name);
          }}
        />
      </ApiFormTemplate>
    </Layout>
  );
};

export default HomePage;
