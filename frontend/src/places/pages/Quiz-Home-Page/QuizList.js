import React from 'react';

import QuizItem from './QuizItem';
import Card from '../../../shared/components/UIElements/Card';
import './QuizList.css'


const QuizList = props => {
  if (props.items.length === 0) {
    return (
      <div className="center">
        <Card>
          <h2>No users found.</h2>
        </Card>
      </div>
    );
  }

  return (
    <ul className="users-list">
      {props.items.map(user => (
        <QuizItem
          key={user.id}
          id={user.id}
          title={user.title}
        />
      ))}
    </ul>
  );
};

export default QuizList;
