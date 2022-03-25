import React, { useEffect, useState } from "react";
import Card from "../../shared/components/UIElements/Card";
import { Link } from "react-router-dom";
import './QuizzesHome.css'
import './QuizItem.css'

const QuizzesHome = () => {
    const [loadedQuizes, setLoadedQuizzes] = useState([]);

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
        <ul className="quizzes-list">
            {loadedQuizes.map((i) => {
              return (
                <li className="user-item">
                <Card className="user-item__content">
                  <Link to="/quizzes/:qid">
                    <div className='user-item__info'>
                    {i.title}
                    </div>
                    </Link>
                </Card>
                </li>
              );
            })}
        </ul>
      </React.Fragment>
    );
}
export default QuizzesHome