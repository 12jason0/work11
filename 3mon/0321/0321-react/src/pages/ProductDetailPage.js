import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { productInfos } from '../components/ProductList';

export default function ProductDetailPage({ products }) {
  const { productId } = useParams();
  console.log('useParams', useParams());
  console.log('productId', productId); // '2'

  const targetProduct = productInfos[Number(productId) - 1];

  console.log(targetProduct);
  const { id, name, email, body } = targetProduct;
  const navigate = useNavigate();

  return (
    <div>
      <h1>ProductDetailPage</h1>
      {/* 만약 home페이지에서 왔으면 뒤로가기 버튼을 누를 시 home 페이지로 이동 */}
      <button onClick={() => navigate(-1)}>뒤로가기</button>
      <button onClick={() => navigate('/')}>홈으로 이동하기 </button>
      <ul>
        <li>상품 번호: {id}</li>
        <li>상품명: {name}</li>
        <li>판매자: {email}</li>
        <li>상세 설명: {body}</li>
      </ul>
    </div>
  );
}
