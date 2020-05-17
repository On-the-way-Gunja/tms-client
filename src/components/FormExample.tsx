import React from "react";
import { Field, FieldArray, reduxForm } from "redux-form";

const ContactForm = (props: any) => {
  const { handleSubmit } = props;
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="firstName">First Name</label>
        <Field name="firstName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="lastName">Last Name</label>
        <Field name="lastName" component="input" type="text" />
      </div>
      <div>
        <label htmlFor="Email">Email</label>
        <Field name="Email" component="input" type="text" />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

const ContactReduxForm = reduxForm({
  form: "contact",
})(ContactForm);

export default ContactReduxForm;
