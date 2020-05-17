import React from "react";
import ApiForm from "../components/ApiForm";

const ApiFormContainer = ({ onSubmit }: any) => {
  return <ApiForm onSubmit={onSubmit} />;
};

export default ApiFormContainer;
