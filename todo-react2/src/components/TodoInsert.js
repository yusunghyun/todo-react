import React ,{useState,useCallback}from 'react';
import {MdAdd} from 'react-icons/md'; // MdAdd라는 아이콘을 쓴다!
import './TodoInsert.scss'

const TodoInsert = ({onInsert}) => {

    const [value,setValue]=useState('');

    const onChange=useCallback(e=>{setValue(e.target.value);},[]);

    const onSubmit = useCallback(e=>{onInsert(value);setValue('');
        e.preventDefault();/*onSubmit은 새로고침을 발생시켜 이를 방지용*/},
        [onInsert,value]); // submit:엔터가능새로고침발생폼에넣기,click:엔터따로버튼에넣기

    return (
        <form className="TodoInsert" onSubmit={onSubmit}>
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit">
                <MdAdd /*여기서 쓴다! 버튼을 아이콘화 */ /> 
            </button>
        </form>
    );
};

export default TodoInsert;