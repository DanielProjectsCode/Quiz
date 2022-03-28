import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import QuestionList from "./QuestionList";

const SelectedQuiz = () => {
  const [loadedQuizzes, setLoadedQuizzes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const quizId = useParams().quizId;

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/quizzes/${quizId}`
        );
        setLoadedQuizzes(responseData.quizzes);
      } catch (err) {
        console.log(err)
      }
    };
    fetchQuizzes();
  }, [sendRequest, quizId]);

  return (
    <React.Fragment>
      <h1>hi</h1>
      {console.log(loadedQuizzes)}
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && loadedQuizzes && (
        <QuestionList items={loadedQuizzes}/>
      )}
    </React.Fragment>
  );
};

export default SelectedQuiz;
