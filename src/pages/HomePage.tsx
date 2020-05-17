import React from "react";
import Layout from "../components/Layout";
import { ApiFormTemplate } from "../components/FormTemplate";
import Lorem from "react-lorem-component";
import SubmitModalButton from "../components/SubmitModalButton";
import DriversForm from "../components/DriversForm";
import submit from "../lib/submitTest";
import StuffsForm from "../components/StuffsForm";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiFormTemplate>
        <DriversForm onSubmit={submit} />
        <StuffsForm onSubmit={submit} />
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
