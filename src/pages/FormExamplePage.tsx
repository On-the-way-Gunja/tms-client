import React from "react";
import ContactForm from "../components/FormExample";

const ContactPage = () => {
  const submit = (values: any) => {
    console.log(values);
  };
  return <ContactForm onSubmit={submit} />;
};

export default ContactPage;
