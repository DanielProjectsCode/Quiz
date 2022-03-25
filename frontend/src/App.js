import React, { useState, useCallback } from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";

import QuizHomeList from "./places/pages/Quiz-Home-Page/QuizHomeList";
import AddQuiz from "./places/pages/Add-quiz/AddQuiz";
import MainNavigation from "./shared/components/Navigation/MainNavigation";
import SelectedQuiz from "./places/pages/Selected-Quiz/SelectedQuiz";
import { AuthContext } from "./shared/context/auth-context";
import Auth from "./places/pages/Login/Auth";

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [role, setRole] = useState("");

  const login = useCallback((uid, role) => {
    setIsLoggedIn(true);
    setRole(role);
  }, []);

  const logout = useCallback(() => {
    setIsLoggedIn(false);
  }, []);

  let routes;

  if (isLoggedIn && role === "edit") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/new" exact>
          <AddQuiz />
        </Route>
        <Route path="/quizzes/:qid" exact>
          <SelectedQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (isLoggedIn && role === "view") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/:qid" exact>
          <SelectedQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else if (isLoggedIn && role === "edit") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/:qid" exact>
          <SelectedQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  } else {
    routes = (
      <Switch>
        <Route path="/" exact>
          <Auth />
        </Route>
        <Route path="/auth">
          <Auth />
        </Route>
        <Redirect to="/auth" />
      </Switch>
    );
  }
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn: isLoggedIn,
        login: login,
        logout: logout,
        role: role,
      }}
    >
      <Router>
        <MainNavigation />
        <main>{routes}</main>
      </Router>
    </AuthContext.Provider>
  );
};

export default App;
