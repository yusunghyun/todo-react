import React from 'react';
import {
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdRemoveCircleOutline,
} from 'react-icons/md';
import cn from 'classnames';
import './TodoListItem.scss';

const TodoListItem = ({ todo2, onRemove, onToggle }) => {
  const   {checked} = todo2; // *개씹중요*   const {id} = todo2; 하면 todo2의 id값이 좌항 id로 들어감. const id = todo2.id 와 동일
  return ( //cn이 뭔데.
    <div className="TodoListItem">
      <div className={cn('checkbox', { checked })} onClick={() => onToggle(todo2.id)}>
        {checked ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
        <div className="text">{todo2.text}</div>
      </div>
      <div className="remove" onClick={() => onRemove(todo2.id)}>
        <MdRemoveCircleOutline />
      </div>
    </div>
  );
};

export default React.memo(TodoListItem); //이제 TodoListItem컴포넌트는 {todo2,onRemove,onToggle}이 바뀌지 않으면 리렌더링 안함.
