import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink
} from "react-router-dom";
import Users from "./components/Users";
import Pizzas from "./components/Pizzas";
import Companies from "./components/Companies";

export default function App() {
  return (
    <div className="container">
      <Router>
        <header className="navbar">
          <section className="navbar-section">
            <NavLink to="/" className="btn btn-link">
              Users
            </NavLink>
            <NavLink to="/companies" className="btn btn-link">
              Companies
            </NavLink>
            <NavLink to="/pizzas" className="btn btn-link">
              Pizzas
            </NavLink>
          </section>
        </header>
        <div className="columns">
          <div className="column col-xs-6">
            <Switch>
              <Route exact path="/">
                <Users />
              </Route>
              <Route path="/companies">
                <Companies />
              </Route>
              <Route path="/pizzas">
                <Pizzas />
              </Route>
            </Switch>
          </div>
        </div>
      </Router>
    </div>
  );
}
