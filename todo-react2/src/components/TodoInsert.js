import React, { useState, useCallback } from 'react';
import { MdAdd } from 'react-icons/md'; // MdAdd라는 아이콘을 쓴다!
import './TodoInsert.scss';

const TodoInsert = ({ a }) => {
  //여기있는 {onInsert}는 상위에서 받아오는 겨 !

  const [value, setValue] = useState(''); // 입력창의 기본값

  const onChange = useCallback(e => {
    setValue(e.target.value);
  }, []); //입력창 내용을 value로 추적하도록. ,[] 해서 한번만 만들어놔도 잘 작동되더라

  const onSubmit = useCallback(
    e => {
      a(value); // a = {oninsertText} 이니까 value 들어가면 틀도 만들어지고 nextid+=1 도 이루어짐.
      setValue('');//다시 입력창 초기화
      e.preventDefault(); /*onSubmit은 새로고침을 발생시켜 이를 방지용 외워 국룰 */
    },
    [a, value], // 입력에 따라 실시간 패치를 해야하니까 갑자기 엔터박아도 목록에 들어갈 수 있도록. a 지우면 경고줄이 뜨네 ?.?
  ); // submit:엔터가능새로고침발생폼에넣기,click:엔터따로버튼에넣기

  return (
    <form className="TodoInsert" onSubmit={onSubmit}>
      <input
        placeholder="할 일을 입력하세요"
        value={value} //우항의 value는 입력한 그 내용이다 으지간하면 이어빵 하기 편하도록 같은 이름 적는듯.
        onChange={onChange}
      />
      <button type="submit">
        <MdAdd /*여기서 쓴다! 버튼을 아이콘화 */ />
      </button>
    </form>
  );
};

export default TodoInsert;
