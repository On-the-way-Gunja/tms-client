import React from "react";
import Layout from "../components/Layout";
import submit from "../lib/submitTest";
import ApiForm from "../components/ApiForm";

export type HomePageProps = {};

const HomePage = (props: HomePageProps) => {
  return (
    <Layout>
      <ApiForm onSubmit={submit} />
    </Layout>
  );
};

export default HomePage;
