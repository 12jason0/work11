import PropTypes from 'prop-types';

export default function FunctionComponent({ name, time, children }) {
  //구조 분해 할당을 FunctionComponent(props) <= 여기서도 가능함 ex) {name, time}
  // const { name, time } = props;
  return (
    <div>
      <h1>Hi {name}</h1>
      {/* <h1>Hi {props.name}</h1>
      <h1>Hi {props.time}</h1> */}
      {/* <h1>Hi {time}</h1> */}
      <div>{children}</div>
    </div>
  );
}

// FunctionComponent.defaultProps = {
//   //기본값으로 설정 가능
//   name: '홍길동',
// };

FunctionComponent.propTypes = {
  //isRequired 는 default 없을 때 작동
  name: PropTypes.string.isRequired,
  time: PropTypes.number,
};
