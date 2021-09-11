import React from "react";
import { render } from "react-dom";
import { FormEngine, Form } from "react-json-form-engine";

import loginForm from './loginForm';

const instance = new FormEngine(loginForm);

const App = () => (
  <Form
    hideTitle
    submitButtonLabel="Login"
    instance={instance}
    onSubmit={() => {
      console.log(instance.getModelValues()); // Get form responses
      console.log(instance.serializeModel()); // Serialize form responses
    }}
  />
);

render(<App />, document.getElementById("root"));
