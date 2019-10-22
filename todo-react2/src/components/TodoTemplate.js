import React from 'react';
import './TodoTemplate.scss';

const TodoTemplate = ({ children }) => { //시ㅡ발 children 국룰이다 개신기하농 기본 함수?인가바
  return (
    <div className="TodoTemplate">
      <div className="app-title">일정관리</div>
      <div className="content">{children}</div>
    </div>
  );
};

export default TodoTemplate;
