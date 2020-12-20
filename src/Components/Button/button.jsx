import React from "react";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

function MainButton(props) {
  const { label, ...rest } = props;

  const classes = useStyles();
  return (
    <Button fullWidth variant="contained" {...rest}>
      {label}
    </Button>
  );
}
export default MainButton;
