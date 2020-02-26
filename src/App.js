import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import HomePage from "./pages/Home";
import LoginPage from "./pages/Login";
import TodoPage from "./pages/Todo";
import Template from "./components/Template";
import PrivateRoute from "./components/PrivateRoute";
import { useSelector } from "react-redux";
import { get } from "lodash";
import AlbumsPage from "./pages/albums";

function App() {
  const data = useSelector(state => get(state, "auth.data", {}));
  return (
    <Template>
      <Switch>
        <Route
          exact
          path="/"
          render={({ location }) =>
            data.id ? (
              <Redirect
                to={{
                  pathname: "/todo",
                  state: { from: location }
                }}
              />
            ) : (
              <HomePage />
            )
          }
        />
        <Route path="/login">
          <LoginPage />
        </Route>
        <PrivateRoute path="/todo">
          <TodoPage />
        </PrivateRoute>
        <Route path="/albums">
          <Route
            path="/albums"
            render={({ location }) =>
              !data.id ? (
                <Redirect
                  to={{
                    pathname: "/login",
                    state: { from: location }
                  }}
                />
              ) : (
                <AlbumsPage />
              )
            }
          ></Route>
        </Route>
      </Switch>
    </Template>
  );
}

export default App;
/* not sure 


*/
