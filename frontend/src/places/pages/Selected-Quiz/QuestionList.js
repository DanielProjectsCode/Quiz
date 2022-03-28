import React from 'react';

import Card from '../../../shared/components/UIElements/Card';
import QuestionItem from './QuestionItem';

import './QuestionList.css'

const QuizSelected = props => {
  if (props.items.length === 0) {
    return (
      <div className="place-list center">
        <Card>
          <h2>No places found. Maybe create one?</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="place-list">
      {props.items.map(quiz => (
        <QuestionItem
          key={quiz.id}
          id={quiz.id}
          title={quiz.title}
          questions={quiz.questions}

         // description={place.description}
        />
      ))}
    </ul>
  );
};

export default QuizSelected;
