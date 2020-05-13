import React from "react";
import Layout from "../components/Layout";
import { DriversForm, StuffForm, ModalButton } from "../components/Form";
import { ApiFormTemplate } from "../components/FormTemplate";
import { Text } from "@chakra-ui/core";
import Lorem from "react-lorem-component";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiFormTemplate>
        <Text paddingLeft={3} paddingTop={3}>
          Drivers
        </Text>
        <DriversForm />
        <Text paddingLeft={3} paddingTop={3}>
          Stuffs
        </Text>
        <StuffForm />
        <ModalButton
          modalBody={<Lorem />}
          getFromApi={(name: string) => {
            console.log(name);
          }}
        />
      </ApiFormTemplate>
    </Layout>
  );
};

export default HomePage;
