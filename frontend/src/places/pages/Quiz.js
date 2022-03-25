import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import './AddQuiz.css'

const Quiz = () => {
  const quizId = useParams().quizId;
  const [loadedQuizes, setLoadedQuizzes] = useState([]);
  useEffect(() => {
    const sendRequest = async () => {
      try {
        const responseData = await fetch(`http://localhost:5000/api/quizzes/${quizId}`);

        const responseString = await responseData.json();
        setLoadedQuizzes(responseString.quizzes);
      } catch (err) {}
    };
    sendRequest();
  }, [quizId]);

  return (
    <React.Fragment>
      <ul className="quizzes-list">
          {loadedQuizes.map((i) => {
            return (
                  <div className='user-item__info'>
                  {i.title}
                  </div>
            );
          })}
      </ul>
    </React.Fragment>
  );
};

export default Quiz;
