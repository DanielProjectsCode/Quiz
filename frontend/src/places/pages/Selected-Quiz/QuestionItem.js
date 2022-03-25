import React from "react";
import Card from "../../../shared/components/UIElements/Card";
import "./QuestionItem.css";

const QuestionItem = (props) => {
  return (
    <React.Fragment>
      <li className="place-item">
        <Card className="place-item__content">
          <div className="place-item__info">
            <h1>{props.title}</h1>
          </div>
        </Card>
      </li>
    </React.Fragment>
  );
};

export default QuestionItem;
