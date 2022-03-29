import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import "./QuestionItem.css";

const QuestionItem = (props) => {
  return (
    <React.Fragment>
      <li className="quiz-item">
        <Card className="quiz-item__content">
          <div className="quiz-item__info">
            <h1>{props.title}</h1>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default QuestionItem;
