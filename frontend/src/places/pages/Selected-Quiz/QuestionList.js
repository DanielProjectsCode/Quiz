import React from 'react';

import Card from '../../../shared/components/UIElements/Card';
import QuizItem from './QuestionItem';

import './QuestionList.css'

const QuizSelected = props => {
  if (props.items.length === 0) {
    return (
      <div className="quiz-list center">
        <Card>
          <h2>No quizs found. Maybe create one?</h2>
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

         // description={quiz.description}
        />
      ))}
    </ul>
  );
};

export default QuizSelected;
