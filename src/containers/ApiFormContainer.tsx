import React from "react";
import ApiForm from "../components/ApiForm";
import { connect } from "react-redux";
import { getToken, getData, clear } from "../modules/apiForm";
import formToApiSchema from "../lib/formToApiSchema";

const { useEffect } = React;

const ApiFormContainer = ({
  getToken,
  getData,
  clear,
  token,
  actions,
  naver_actual_result,
  naver_every_result,
  submitted,
  loadingToken,
  loadingData,
}: any) => {
  // Load token once
  useEffect(() => {
    getToken();
  }, [getToken]);

  const onSubmit = (values: any) => {
    getData({ token: token, value: formToApiSchema(values) });
  };

  return (
    <ApiForm
      onSubmit={onSubmit}
      onClear={clear}
      actions={actions}
      naver_actual_result={naver_actual_result}
      naver_every_result={naver_every_result}
      loadingToken={loadingToken}
      loadingData={loadingData}
      token={token}
      submitted={submitted}
    />
  );
};

// export default ApiFormContainer;
export default connect(
  ({ apiForm, loading }: any) => ({
    actions: apiForm.actions,
    naver_actual_result: apiForm.naver_actual_result,
    naver_every_result: apiForm.naver_every_result,
    token: apiForm.token,
    submitted: apiForm.submitted,
    loadingToken: loading.GET_TOKEN,
    loadingData: loading.GET_DATA,
  }),
  {
    getToken,
    getData,
    clear,
  }
)(ApiFormContainer);
