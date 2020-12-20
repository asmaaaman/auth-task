import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Header from "../Components/Header/header";
import FormikContainer from "../Containers/Intro/FormGridContainer/formGridContais";
import FormikContainerRegister from "../Containers/Intro/Register/registerContainer";
import Welcome from "../Components/WelcomePage/welcomePage";

function MyRoutes({ location }) {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <FormikContainer />
        </Route>
        <Route exact path="/register">
          <FormikContainerRegister />
        </Route>

        <Route path="/welcome">
          <Welcome />
        </Route>
      </Switch>
    </Router>
  );
}
export default MyRoutes;
