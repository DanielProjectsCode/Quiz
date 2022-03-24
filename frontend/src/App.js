import React from "react";
import { BrowserRouter as Router, Redirect, Route, Switch } from "react-router-dom";

import QuizzesHome from "./places/pages/QuizzesHome";
import AddQuiz from "./places/pages/AddQuiz";
import MainNavigation from './shared/components/Navigation/MainNavigation'

const App = () => {
  return (
    <Router>
      <MainNavigation />
      <main>
      <Switch>
        <Route path="/" exact>
          <QuizzesHome />
        </Route>
        <Route path="/quizzes/new" exact>
          <AddQuiz />
        </Route>
        <Redirect to='/' />
      </Switch>
      </main>
    </Router>
  );
};

export default App;
