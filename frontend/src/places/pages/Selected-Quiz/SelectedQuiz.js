import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import ErrorModal from "../../../shared/components/UIElements/ErrorModal";
import LoadingSpinner from "../../../shared/components/UIElements/LoadingSpinner";
import { useHttpClient } from "../../../shared/hooks/http-hook";
import QuestionList from "./QuestionList";

const SelectedQuiz = () => {
  const [LoadedQuizzes, setLoadedQuizzes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const quizId = useParams().quizId;

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/quizzes/${quizId}`
        );
        console.log(responseData);
        setLoadedQuizzes(responseData.quizzes);
      } catch (err) {
      }
    };
    fetchQuizzes();
  }, [sendRequest, quizId]);

  return (
    <React.Fragment>
      <ErrorModal error={error} onClear={clearError} />
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
      {!isLoading && LoadedQuizzes && <QuestionList items={LoadedQuizzes} />}
    </React.Fragment>
  );
};

export default SelectedQuiz;
