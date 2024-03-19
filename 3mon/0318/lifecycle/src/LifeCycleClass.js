import React, { Component } from 'react';
import LifeCycleClassChild from './LifeCycleClassChild';
//rcc : 클래스형 단축기

export default class LifeCycleClass extends Component {
  state = {
    number: 0,
    visible: true,
  };

  changeNumberState = () => {
    //클래스형 함수에서 state값 변경
    this.setState({ number: this.state.number + 1 });
  };

  changevisibleState = () => {
    this.setState({ visible: !this.state.visible });
  };

  render() {
    return (
      <>
        <button onClick={this.changeNumberState}>PLUS</button>
        <button onClick={this.changevisibleState}>ON/OFF</button>
        {this.state.visible && (
          <LifeCycleClassChild number={this.state.number} />
        )}
      </>
    );
  }
}
