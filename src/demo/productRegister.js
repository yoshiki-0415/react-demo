import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


function ProductRegister() {
  const [text, setText] = useState('');
  const onClickRegister = () => {
    const requestOptions ={
      method: 'POST',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({productName: text})
    };
    fetch('http://localhost:8080/product',requestOptions
    ).then((response)=> console.log("登録完了"))
  }
  return (
    <>
      <h2>商品登録</h2>
      <div>
        <span>商品名:</span>
          <input
          value={text}
          onChange={(event) => setText(event.target.value)}
          />
      </div>
      <div>
      <button onClick={onClickRegister}>登録</button>
      </div>
    </>
  );
}

export default ProductRegister;