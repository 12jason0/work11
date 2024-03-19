import React, { Component } from 'react';

export default class LifeCycleClassChild extends Component {
  //Mount
  componentDidMount() {
    console.log('컨포넌트 마운트!!');
  }
  //Update
  componentDidUpdate() {
    console.log('컴포넌트 업데이트!');
  }
  //Unmount
  componentWillUnmount() {
    console.log('컴포넌트 언마운트!!');
  }
  render() {
    return <div>현재 Number 값은 {this.props.number}입니다!</div>;
  }
}
