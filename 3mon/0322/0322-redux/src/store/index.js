import { combineReducers } from 'redux';
import counterReducer from './counterReducer';
import isVisibleReducer from './isVisibleReducer';
import bankReducer from './bankReducer';

//combineReducers : 여러 개의 리듀서로 하나로 합침
const rootReducer = combineReducers({
  counter: counterReducer,
  isVisible: isVisibleReducer,
  bank: bankReducer,
});

export default rootReducer;
