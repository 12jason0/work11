import React, { Component } from 'react';

export default class Change extends Component {
  constructor(props) {
    super(props);
    this.state = {
      fruit: 'apple',
      Color: 'black',
      TextColor: 'white',
      inputText: 'text',
    };
  }

  ChangeFruit = (e) => {
    this.setState({ fruit: e.target.value });
  };

  ChangeColor = (e) => {
    this.setState({ Color: e.target.value });
  };

  ChangeTextColor = (e) => {
    this.setState({ TextColor: e.target.value });
  };

  ChangeInputText = (e) => {
    this.setState({ inputText: e.target.value });
  };

  render() {
    const { fruit, Color, TextColor, inputText } = this.state;
    return (
      <div>
        <div>
          <select name="fruit" onChange={this.ChangeFruit}>
            <option value="apple">사과</option>
            <option value="banana">바나나</option>
            <option value="peach">복숭아</option>
            <option value="orange">오렌지</option>
          </select>
          <select name="Color" onChange={this.ChangeColor}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
          <select name="TextColor" onChange={this.ChangeTextColor}>
            <option value="black">검정</option>
            <option value="white">하양</option>
            <option value="red">빨강</option>
            <option value="orange">주황</option>
            <option value="yellow">노랑</option>
            <option value="green">초록</option>
            <option value="blue">파랑</option>
            <option value="purple">보라</option>
            <option value="pink">분홍</option>
          </select>
        </div>
        내용: <input type="text" onChange={this.ChangeInputText} />
        <div>
          <img src={`/${fruit}.jpg`} alt="" />
        </div>
        <div
          style={{
            color: TextColor,
            backgroundColor: Color,
          }}
        >
          {inputText}
        </div>
      </div>
    );
  }
}
