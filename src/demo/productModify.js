import { useEffect, useState, useRoute } from 'react';
import { useParams, useLocation } from 'react-router-dom';

function ProductModify() {
  const { productId } = useParams();
  const location = useLocation();
  const [text, setText] = useState(location.state.productName);
  const onClickRegister = () => {
    const requestOptions ={
      method: 'PUT',
      headers:{'Content-Type': 'application/json'},
      body: JSON.stringify({id: productId, productName: text})
    };
    fetch('http://localhost:8080/product',requestOptions
    ).then((response)=> console.log("変更完了"))
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

export default ProductModify;