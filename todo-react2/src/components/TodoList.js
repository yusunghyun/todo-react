import React from 'react';
import TodoListItem from './TodoListItem';
import './TodoList.scss';

const TodoList = ({ todos, onRemove, onToggle }) => {
  //todos라는 객체들의 배열을 받아왔고 9번줄에서 한개씩 투입할 예정
  const rev = [...todos];//새로받아온 배열을 뒤집을꺼얌 
  rev.reverse();
  return (
    <div className="TodoList">
      {rev.map(doo => ( //아 onRemove랑 onToggle은 그대로 아이템으로 넘어가는데 todos는 전체내용배열?이므로 하나씩 쪼갠걸로 보내주네 그니 이름이 다름ㅋ
        <TodoListItem
          todo2={doo}
          key={doo.id}
          onRemove={onRemove}
          onToggle={
            onToggle
          } /* item.js에서 onremove,ontoggle써야하므로 그대로 복붙.*/
        />
      ))}
    </div>
  );
};

export default React.memo(TodoList); //이제 TodoList컴포넌트는 {todos,onRemove,onToggle}이 바뀌지 않으면 리렌더링 안함. 사실상 todos만 영향있지 뒤에 두개는 넘기기용이니.
