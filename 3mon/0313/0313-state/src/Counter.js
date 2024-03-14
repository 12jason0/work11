import { Component } from 'react';

class Counter extends Component {
  // state 사용
  state = {
    number: 0,
    name: '코딩온',
  };
  render() {
    console.log(this.state);
    const { number } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <button
          onClick={() => {
            //this.setState() : state 값을 바꾸는 함수
            //state 값은 직접 변경 x 꼭  setState() 이용만 가능
            this.setState({ number: number + 1 });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
