import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';


const TodoList = ({todos,onRemove,onToggle}) => {
    return (
        <div className="TodoList">
            {todos.map((doo)=>(<TodoListItem todo={doo} key={doo.id} onRemove={onRemove} onToggle={onToggle}/* item.js에서 onremove써야하므로 그대로 복붙.*/ />))}
        </div>
    );
};

export default TodoList;