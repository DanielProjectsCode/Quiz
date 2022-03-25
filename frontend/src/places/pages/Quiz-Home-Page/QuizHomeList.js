import React, { useEffect, useState } from "react";
import QuizList from "./QuizList";

const QuizzesHome = () => {
  const [loadedQuizzes, setLoadedQuizzes] = useState([]);

  useEffect(() => {
    const sendRequest = async () => {
      try {
        const responseData = await fetch("http://localhost:5000/api/quizzes");

        const responseString = await responseData.json();
        setLoadedQuizzes(responseString.quizzes);
      } catch (err) {}
    };
    sendRequest();
  }, []);

  return (
    <React.Fragment>
      <QuizList items={loadedQuizzes}/>
    </React.Fragment>
  );
};
export default QuizzesHome;
