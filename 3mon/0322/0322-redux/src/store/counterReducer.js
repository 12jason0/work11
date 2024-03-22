// 앞에 이름을 적어서 중복 방지 (액션을 발생 시키는 데 사용)

const PLUS = 'counter/PULS';
const MINUS = 'counter/MINUS';

//컴포넌트에서 액션을 쉽게 발생시킬 수 있도록 함수 사용
//한줄이여서 return 생략
export const plus = () => ({ type: PLUS });
export const minus = () => ({ type: MINUS });
//    return {type : MINUS}

// state 초기값 정의
const initialStae = {
  number: 50,
};

//reducer 정의 : 상태 변화를 일으키는 함수
// (state = initialStae, action) : state의 초기값, dispatch에서 받아옴
const counterReducer = (state = initialStae, action) => {
  // action 객체 : {type : 'XXX', payload : ?}
  switch (action.type) {
    case PLUS:
      return { number: state.number + 1 };
    case MINUS:
      return { number: state.number - 1 };
    default:
      return state;
  }
};

export default counterReducer;
