import React from "react";
import ApiForm from "../components/ApiForm";
import { connect } from "react-redux";
import { getToken, getData } from "../modules/apiForm";

const { useEffect } = React;

const ApiFormContainer = ({
  getToken,
  getData,
  token,
  actions,
  loadingToken,
  loadingData,
}: any) => {
  // Load token once
  useEffect(() => {
    getToken();
  }, [getToken]);
  // Load Data
  useEffect(() => {
    getData();
  }, [getData]);

  const onSubmit = () => {
    console.log("submitted!!");
  };

  return (
    <ApiForm
      onSubmit={onSubmit}
      actions={actions}
      loadingToken={loadingToken}
      loadingData={loadingData}
    />
  );
};

// export default ApiFormContainer;
export default connect(
  ({ apiForm, loading }: any) => ({
    actions: apiForm.actions,
    token: apiForm.token,
    loadingToken: loading.GET_TOKEN,
    loadingData: loading.GET_DATA,
  }),
  {
    getToken,
    getData,
  }
)(ApiFormContainer);
