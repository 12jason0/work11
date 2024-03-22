const DEPOSIT = 'bank/DEPOSIT';
const WITHDRAW = 'bank/WITHDRAW';

// 액션 생성 함수 수정: payload를 인자로 받음
export const deposit = (amount) => ({ type: DEPOSIT, payload: amount });
export const withdraw = (amount) => ({ type: WITHDRAW, payload: amount });

const initialState = 0;

const bankReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPOSIT:
      return state + action.payload;
    case WITHDRAW:
      return state - action.payload;
    default:
      return state;
  }
};

export default bankReducer;
