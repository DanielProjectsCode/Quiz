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
  const [userId, setUserId] = useState(false);
  const [token, setToken] = useState(null);
  const [role, setRole] = useState('');

  const login = useCallback((uid, token, role) => {
    setToken(token);
    setRole(role);
    setUserId(uid);
    console.log(uid)
    console.log(role)
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setRole("")
    setUserId(null)
  }, []);

  let routes;

  if (token && role === 'edit') {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/new" exact>
          <AddQuiz />
        </Route>
        <Route path="/quizzes/:quizId" exact>
          <SelectedQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  if (token && role === "view") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/:quizId" exact>
          <SelectedQuiz />
        </Route>
        <Redirect to="/" />
      </Switch>
    );
  }
  if (token && role === "restricted") {
    routes = (
      <Switch>
        <Route path="/" exact>
          <QuizHomeList />
        </Route>
        <Route path="/quizzes/:quizId" exact>
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
        isLoggedIn: !!token,
        token: token,
        role: role,
        userId: userId,
        login: login,
        logout: logout,
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
