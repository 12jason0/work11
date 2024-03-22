import React from 'react';
import { useParams, useSearchParams, useNavigate } from 'react-router-dom';

export default function StudentDetail() {
  console.log('useParams', useParams()); // {name : '~~' }
  const { name } = useParams();
  const [serchParams, setSearchParams] = useSearchParams();
  const keyWord = serchParams.get('name');
  const navigate = useNavigate();
  return (
    <div>
      <h5>
        학생의 이름은 <span style={{ color: 'green' }}>{name}</span>입니다.
      </h5>
      {keyWord && (
        <h5>
          실제 이름은 <span style={{ color: 'red' }}>{keyWord}</span>입니다.
        </h5>
      )}
      <button onClick={() => navigate(-1)}>이전 페이지로</button>
    </div>
  );
}
