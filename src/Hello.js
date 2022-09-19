import React from 'react';

function Hello({ color, name, isSpecial }) {
    return <div style={{ color }}>
        { isSpecial && <b>isSpecial이 true 입니당 </b>}
        {/*isSpecial이 false일때 false이고, true일때 <b>*</b> 가 된다.*/}
        안녕하세요 {name}
    </div>
}

Hello.defaultProps = {
    name: '기본값 텍스트 입니다'
}

export default Hello;