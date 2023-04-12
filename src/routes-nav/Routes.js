import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import Homepage from "../homepage/Homepage";
import LoginForm from "../auth/LoginForm";
import SignupForm from "../auth/SignupForm";
import NewToDoForm from "../todos/NewToDoForm";
import ToDoList from "../todos/ToDoList";
import PrivateRoute from "./PrivateRoute";
import Recipes from "../recipes/Recipes";
import RecipeDetails from "../recipes/RecipesDetails";


// Site-wide routes.
// Parts of site are only visitable when logged in. Those routes are
// wrapped by <PrivateRoute>, which is an authorization component.
// Visiting a non-existant route redirects to the homepage.

function Routes({ login, signup, createNewToDo, id , query}) {
  console.debug(
      "Routes",
      `login=${typeof login}`,
      `signup=${typeof signup}`,
  );

  return (
      <div>
        <Switch>

          <Route exact path="/">
            <Homepage />
          </Route>

          <Route exact path="/login">
            <LoginForm login={login} />
          </Route>

          <Route exact path="/signup">
            <SignupForm signup={signup} />
          </Route>

          <PrivateRoute exact path="/todos">
            <ToDoList />
          </PrivateRoute>

          <PrivateRoute exact path="/todo">
            <NewToDoForm createNewToDo={createNewToDo}/>
          </PrivateRoute>

          <PrivateRoute exact path="/recipes" componente={Recipes}>
            <Recipes id={id} />
          </PrivateRoute>

          <PrivateRoute exact path="/recipes/:id" componente={RecipeDetails}>
            <RecipeDetails id={id}/>
          </PrivateRoute>

          <Redirect to="/" />

        </Switch>
      </div>
  );
}

export default Routes;
