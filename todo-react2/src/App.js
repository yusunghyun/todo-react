import React, { useState, useCallback, useRef } from 'react';
import TodoTemplate from './components/TodoTemplate';
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';



const App = () => {
  const [todos, setTodos] = useState([]); //빈배열로 시작

  const nextId = useRef(1); //useState(1)는 낭비이므로 ref로 하자(=초기값)

  const insertText = useCallback( //useState랑 비슷한데 useCallback()을 겉면에 추가하긴함 ㅋ 그 뭐시냐 ,[] 할수있는기능이 좋아서 쓰는듯 ㅇ.ㅇ 
    // TodoInsert.js로 보낼놈 만들기 ( 내용 입력 PART )
    text => {
      const a = { //틀, 객체니까 대입이 : 이거인거다 ㅋㅋㅋ
        id: nextId.current,
        text,
        checked: false,
      };
      setTodos(todos => todos.concat(a)); //빈배열에 더하고 거기에 계속 더할 예정 , 원래 use~는 값넣는건데 여기서는 실행&선언이라고 생각하자 
      nextId.current += 1; // nextId 1씩 더하기 useRef사용할 때 .current는 그냥 국룰인거 같다.. 현재값이라고 생각하자
    },
    [], //[todos]에서 todos 뺀다음 21번줄 setTodos()에 ()=>이었는데 todos => 로바꿈. 피라미터에 [todos]를 하면 바뀔때마다 새 함수를 만든대!
  );

  const onRemove = useCallback(
    // TodoListItem.js로 보낼놈 만들기 TodoList.js 거쳐야댐 ㅋㅋ( 삭제 담당 )
    id => {
      setTodos(todos => todos.filter(inPut => inPut.id !== id)); //todos라는 원본배열?에 필터링을 한 새로운 배열을 삽입함. 인자가 id일뿐 id작동과 관계x
    },
    [], //[todos]에서 todos 뺀다음 30번줄 setTodos()에 todos => 추가함.
  );

  const onToggle = useCallback(
    // TodoListItem.js로 보낼놈 만들기 TodoList.js 거쳐야댐 ㅋㅋ( 체크 담당 )
    id => { //뜻 : 위 filter와 비슷하지만 id가 같은놈이 있으면 checked를 뒤집어서 새로 만들어서 반환해줌.
      setTodos(
        todos =>
          todos.map(a =>
            a.id === id
              ? {
                  ...a,
                  checked: !a.checked, //체크드를 뒤집는다.
                }
              : a,
          ), //todo.id랑id가 다르면 들어온 todo가 똑같은 todo로 탈출.
      );
    },
    [], //[todos]에서 todos 뺀다음 38번줄 setTodos()에 todos => 추가함.
  );

  return (
    <div>
      <TodoTemplate>
        <TodoInsert
          a={
            insertText
          } /* 설명 : 좌항a는 보낼 이름. 우항{insertText}는 보낼 a의 내용 . todoInsert로 넘길꺼.*/
        />
        <TodoList todos={todos} onRemove={onRemove} onToggle={onToggle} />
      </TodoTemplate>
    </div>
  );
};

export default App;
