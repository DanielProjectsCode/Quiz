import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./AddQuiz.css";
import ErrorModal from '../../shared/components/UIElements/ErrorModal'
import LoadingSpinner from '../../shared/components/UIElements/LoadingSpinner'
import { useHttpClient } from '../../shared/hooks/http-hook';
import QuizSelected from "./QuizSelected";

const Quiz = () => {
  const [LoadedQuizzes, setLoadedQuizzes] = useState();
  const { isLoading, error, sendRequest, clearError } = useHttpClient();

  const quizId = useParams().quizId;

  useEffect(() => {
    const fetchQuizzes = async () => {
      try {
        const responseData = await sendRequest(
          `http://localhost:5000/api/quizzes/${quizId}`
        );
        setLoadedQuizzes(responseData.quizzes);
      } catch (err) {}
    };
    fetchQuizzes();
  }, [sendRequest, quizId]);

  return (
    <React.Fragment>

      {isLoading && (
        <div className="center">
          <LoadingSpinner />
        </div>
      )}
    {!isLoading && LoadedQuizzes &&(
          <QuizSelected items={LoadedQuizzes} />
    )}
    </React.Fragment>
  );
};

export default Quiz;
