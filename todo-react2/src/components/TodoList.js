import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


const TodoList = ({todos}) => {
    return (
        <div className="TodoList">
            {todos.map((doo)=>(<TodoListItem todo={doo} key={doo.id}/>))}
        </div>
    );
};

export default TodoList;