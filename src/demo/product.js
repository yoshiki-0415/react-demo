import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

function Product() {
  const { productId } = useParams();
  const [post, setPost] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    const fetchPost = async () => {
      const res = await fetch(
        `http://localhost:8080/product/${productId}`
      );
      const data = await res.json();
      setPost(data);
    };
    fetchPost();
  }, [productId]);

  const onClickDelete = () => {
    const requestOptions ={
      method: 'DELETE',
      headers:{'Content-Type': 'application/json'}
    };
    fetch(`http://localhost:8080/product/${productId}`, requestOptions
    ).then((response)=> console.log("削除完了"))
  }
  
  return (
    <>
      <h2>商品詳細</h2>
      <div>
        <p>ID:{post.id}</p>
        <p>商品名:{post.productName}</p>
      </div>
      <div>
      <button onClick={() => navigate('edit', { state : {productName:post.productName} })}>変更</button><button onClick={onClickDelete}>削除</button>
      </div>
    </>
  );
}

export default Product;