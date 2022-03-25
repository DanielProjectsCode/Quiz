import React from 'react';
import { Link } from 'react-router-dom';
import './QuizItem.css'

import Card from '../../shared/components/UIElements/Card';


const QuizzesItem = props => {
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

export default QuizzesItem;

/*
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
        */