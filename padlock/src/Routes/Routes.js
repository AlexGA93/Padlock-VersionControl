import React from "react";
import { Switch, Route } from "react-router-dom";

//Pages
// import AuthOptions from "../components/Auth/AuthOptions/AuthOptions";
// import Login from "../components/Auth/LoginForm/LoginForm";
// import Register from "../components/Auth/RegisterForm/RegisterForm"

export default function Routes(props) {
  const { user, setReloadApp, playerSong } = props;

  return (
    <Switch>
        {/* <Route exact path="/" component={AuthOptions} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} /> */}
    </Switch>
  );
}