import React from 'react';
import { Link } from 'react-router-dom';

export default function ProductItem({ product }) {
  // product: {id, name, email, body}
  return (
    <>
      <Link to={`/products/${product.id}`}>
        <ul>
          <li>상품명: {product.name}</li>
          <li>상세 설명: {product.body}</li>
        </ul>
      </Link>
      <hr />
    </>
  );
}
