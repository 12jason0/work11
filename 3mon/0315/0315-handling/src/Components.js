import React, { Component } from 'react';

export default class Components extends Component {
  state = {
    text: 'Hello World!',
  };
  render() {
    const { text } = this.state;
    const changeText = () => {
      this.setState({ text: 'Goodbye World!' });
    };
    return (
      <div>
        <h1>{text}</h1>
        <button onClick={changeText}>클릭</button>
      </div>
    );
  }
}
