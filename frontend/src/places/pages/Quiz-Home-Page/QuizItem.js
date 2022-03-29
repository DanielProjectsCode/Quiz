import React from "react";
import { Link } from "react-router-dom";

import Card from "../../../shared/components/UIElements/Card";
import "./QuizItem.css";

const QuizItem = props => {
  return (
    <li className="user-item">
      <Card className="user-item__content">
        <Link to={`/quizzes/${props.id}`}>
          <div className="user-item__info">
            <h2>{props.title}</h2>
          </div>
        </Link>
      </Card>
    </li>
  );
};

export default QuizItem;
