import React from "react"
import { Route, Switch } from "react-router-dom"
import Signup from "./components/auth/Signup"
import Dashboard from "./components/dashboard"
import Landing from "./components/landing"
import LoginForm from "./components/auth/Login"

const BaseRouter = () => (
  <Switch>
    <Route exact path="/" component={Landing} />
    <Route exact path="/register/" component={Signup} />
    <Route exact path="/login/" component={LoginForm} />

    <Route path="/dashboard/" component={Dashboard} />
  </Switch>
)

export default BaseRouter
