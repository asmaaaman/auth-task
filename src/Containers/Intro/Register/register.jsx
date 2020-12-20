import React from "react";
import MainButton from "../../../Components/Button/button";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import FormControl from "../../../Containers/Intro/FormControl/formControl";
import { useHistory } from "react-router-dom";
import Welcome from "../../../Components/WelcomePage/welcomePage";

function FormikRegister() {
  const initialValues = {
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    phoneNumber: "",
  };
  const validationSchema = Yup.object({
    username: Yup.string().required("Must Enter User Name!!"),
    email: Yup.string().required("Email Field Required"),
    password: Yup.string().required("This Field is Required"),
    confirm_password: Yup.string().required("Must Enter Confrim Password"),
    phoneNumber: Yup.string().required("This Field is Required"),
  });
  const history = useHistory();
  const onSubmit = () => {
    history.push("/welcome");
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
            name="username"
            type="name"
            label="User Name"
          />
          <FormControl
            control="input"
            name="email"
            type="email"
            label="Email"
          />
          <FormControl
            control="input"
            name="phoneNumber"
            type="number"
            label="Phone Number"
          />
          <FormControl
            control="input"
            name="password"
            type="password"
            label="Password"
          />
          <FormControl
            control="input"
            name="confirm_password"
            type="password"
            label=" confirm password"
          />

          <MainButton type="submit" label="Register" color="secondary" />
        </Form>
      )}
    </Formik>
  );
}

export default FormikRegister;
