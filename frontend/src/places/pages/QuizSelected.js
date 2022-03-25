import React from 'react';

import Card from '../../shared/components/UIElements/Card';
import QuizItem from './QuizItem';

import './QuizSelected.css'

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
    <ul className="quiz-list">
      {props.items.map(quiz => (
        <QuizItem
          key={quiz.id}
          id={quiz.id}
          title={quiz.title}

         // description={place.description}
        />
      ))}
    </ul>
  );
};

export default QuizSelected;
