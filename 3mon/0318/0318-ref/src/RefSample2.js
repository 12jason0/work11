import { Component, createRef } from 'react';

class RefSample2 extends Component {
  // createRef를 사용해 만들 때는 컴포넌트 내부에서 변수에 createRef()를 담아주는 것
  myInput = createRef();
  handleFocus = () => {
    //createRef를 이용해 설정한 DOM요소 접근하려면 this.myInput.current 이용
    this.myInput.current.focus();
    console.log(this.myInput.current); //<input type = 'text'>
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input type="text" ref={this.myInput} />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample2;
