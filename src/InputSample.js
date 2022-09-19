import React, {useRef, useState} from 'react';

function InputSample() {

    const [inputs, setInputs] = useState({
        name: '',
        nickname: ''
    });

    const nameInput = useRef(null);

    const {name, nickname} = inputs; //비구조화 할당을 통해서 값을 추출

    const onChange = (e) => {
        const {value, name} = e.target; // e.target에서 name과 value를 추출
        setInputs({
            ...inputs, // 기존의 input 객체를 복사
            [name] : value // name 값을 value로 설정
            });
    }

    const onReset = () => {
        setInputs({
            name: '',
            nickname: '',
        });
        nameInput.current.focus();
    };

    return (
        <div>
            <input
                placeholder="이름"
                name="name"
                onChange={onChange}
                value={name}
                ref={nameInput}
            />
            <input placeholder="닉네임" name="nickname" onChange={onChange} value={nickname}/>
            <button onClick={onReset}>초기화</button>
            <div>
                <b>값:</b>
                {name} ({nickname})
            </div>
        </div>
    );
}

export default InputSample;