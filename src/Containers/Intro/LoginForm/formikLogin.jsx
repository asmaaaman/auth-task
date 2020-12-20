import React from "react";
import MainButton from "../../../Components/Button/button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../FormControl/formControl";
import { useHistory } from "react-router-dom";
import { Link } from "react-router-dom";

function FormikLogin() {
  const initialValues = {
    email: "",
    password: "",
  };
  const validationSchema = Yup.object({
    email: Yup.string().required("Email Field Required"),

    password: Yup.string().required("This Field is Required"),
  });
  const history = useHistory();
  const onSubmit = () => {
    history.push("/menu");
  };

  return (
    <Formik
      validationSchema={validationSchema}
      initialValues={initialValues}
      onSubmit={onSubmit}
    >
      {(formik) => (
        <Form>
          <FormControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            label="Password"
          />

          <MainButton type="submit" label="Sign In" color="secondary" />
          <div>
            If you didn't have an account <Link to="/register"> Register</Link>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default FormikLogin;
