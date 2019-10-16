import React ,{useState,useCallback}from 'react';
import {MdAdd} from 'react-icons/md'; // MdAdd라는 아이콘을 쓴다!
import './TodoInsert.scss'

const TodoInsert = () => {

    const [value,setValue]=useState('');

    const onChange=useCallback(e=>{setValue(e.target.value);},[]);

    return (
        <form className="TodoInsert">
            <input placeholder="할 일을 입력하세요" value={value} onChange={onChange}/>
            <button type="submit">
                <MdAdd /*여기서 쓴다! 버튼을 아이콘화 */ /> 
            </button>
        </form>
    );
};

export default TodoInsert;