import { Component } from 'react';
import PropTypes from 'prop-types';

class SayFunctionExam extends Component {
  render() {
    const { text, valid } = this.props;

    return (
      <div>
        <h2>{text}</h2>
        <button onClick={valid}>콘솔</button>
      </div>
    );
  }
}

SayFunctionExam.defaultProps = {
  text: '이건 기본 text porps입니다.',
};

SayFunctionExam.PropsTypes = {
  text: PropTypes.string.isRequired,
};

export default SayFunctionExam;
