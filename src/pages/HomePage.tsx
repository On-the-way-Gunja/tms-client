import React from "react";
import Layout from "../components/Layout";
import submit from "../lib/submitTest";
import ApiFormContainer from "../containers/ApiFormContainer";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiFormContainer onSubmit={submit} />
    </Layout>
  );
};

export default HomePage;
