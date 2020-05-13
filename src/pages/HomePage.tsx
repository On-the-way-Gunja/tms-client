import React from "react";
import Layout from "../components/Layout";
import { ApiForm } from "../components/Form";
import { ApiFormTemplate } from "../components/FormTemplate";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiFormTemplate>
        <ApiForm />
      </ApiFormTemplate>
    </Layout>
  );
};

export default HomePage;
