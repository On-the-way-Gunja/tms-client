import React from "react";
import ApiForm from "../components/ApiForm";
import { connect } from "react-redux";
import { getToken, getData } from "../modules/apiForm";
import { getDirection } from "../modules/map";
import formToApiSchema from "../lib/formToApiSchema";

const { useEffect } = React;

const ApiFormContainer = ({
  getToken,
  getData,
  getDirection,
  token,
  actions,
  directions,
  loadingToken,
  loadingData,
  loadingDirection,
}: any) => {
  // Load token once
  useEffect(() => {
    getToken();
  }, [getToken]);

  const onSubmit = (values: any) => {
    getData({ token: token, value: formToApiSchema(values) });
    getDirection({ actions });
  };

  return (
    <ApiForm
      onSubmit={onSubmit}
      actions={actions}
      loadingToken={loadingToken}
      loadingData={loadingData}
      token={token}
    />
  );
};

// export default ApiFormContainer;
export default connect(
  ({ apiForm, map, loading }: any) => ({
    directions: map.directions,
    actions: apiForm.actions,
    token: apiForm.token,
    loadingToken: loading.GET_TOKEN,
    loadingData: loading.GET_DATA,
    loadingDirection: loading.GET_DIRECTION,
  }),
  {
    getToken,
    getData,
    getDirection,
  }
)(ApiFormContainer);
