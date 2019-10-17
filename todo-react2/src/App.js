import React,{useState,useCallback,useRef} from 'react';
import TodoTemplate from "./components/TodoTemplate";
import TodoInsert from './components/TodoInsert';
import TodoList from './components/TodoList';


const App = () => {

  const [todos,setTodos]=useState([
    { id:1,text:'리액트의 기초 알아보기',checked:true},
    { id:2,text:'컴포넌트 스타일링해 보기',checked:true},
    { id:3,text:'일정 관리 앱 만들어 보기',checked:false}
  ]);

  const nextId = useRef(4); //useState(4)는 낭비이므로 ref로 하자

  const onInsert = useCallback(
    text => {
      const todo = {
        id:nextId.current,
        text,
        checked:false
      };
      setTodos(todos.concat(todo));
      nextId.current += 1;// nextId 1씩 더하기
    },[todos]
  );

  const onRemove = useCallback(
    id => {
      setTodos(todos.filter( (inPut)=> inPut.id !== id) )
    },[todos]
  );

  const onToggle = useCallback(
    id=>{
      setTodos(
        todos.map(todo=>
          todo.id===id ? {...todo,checked:!todo.checked}:todo) //todo.id랑id가 다르면 들어온 todo가 똑같은 todo로 탈출.
      );
    },[todos],
  )
  
  return (
    <div>
      <TodoTemplate>
        <TodoInsert onInsert={onInsert}/>
        <TodoList todos={todos} onRemove = {onRemove} onToggle={onToggle}/>
      </TodoTemplate>
    </div>
  );
};

export default App;