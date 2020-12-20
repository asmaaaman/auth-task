import React from "react";
import { Field, ErrorMessage } from "formik";
import TextField from "@material-ui/core/TextField";
import TextError from "../../Components/TextError/textError";

function MainInput(props) {
  const { label, name, ...rest } = props;

  return (
    <React.Fragment>
      <Field name={name}>
        {(props) => {
          const { field } = props;
          return (
            <TextField
              {...field}
              {...rest}
              variant="outlined"
              margin="normal"
              fullWidth
              id={name}
              label={label}
              name={name}
            />
          );
        }}
      </Field>
      <ErrorMessage name={name} component={TextError} />
    </React.Fragment>
  );
}
export default MainInput;
