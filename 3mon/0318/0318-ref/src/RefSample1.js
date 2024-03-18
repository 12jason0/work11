import { Component } from 'react';

class RefSample1 extends Component {
  handleFocus = () => {
    //input focus 처리
    console.log('this', this); //RefSample1 (content, myInput, props, refs ...)
    console.log('this.myInput', this.myInput); //<input type="text">
    this.myInput.focus();
  };

  render() {
    return (
      <>
        <p>(클래스형 컴포넌트) 버튼 클릭 시 input에 focus 처리</p>
        <input
          type="text"
          ref={(ref) => {
            //this : 해당 컴포넌트 안으로 들어가기 위한 것
            //해당 컴포넌트에 myInput 이라는 변수 생성
            this.myInput = ref;
          }}
        />
        <button onClick={this.handleFocus}>focus</button>
      </>
    );
  }
}

export default RefSample1;
