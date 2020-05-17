import React from "react";
import ContactForm from "../components/FormExample";
import DriversForm from "../components/DriversForm";
import submit from "../lib/submitTest";

const ContactPage = () => {
  return <DriversForm onSubmit={submit} />;
};

export default ContactPage;
