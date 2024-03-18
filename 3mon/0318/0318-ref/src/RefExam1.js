import { Component } from 'react';
import './RefExam1.css';
class RefExam1 extends Component {
  handleFocus = () => {
    if (this.user.value.trim() === '') {
      this.user.focus();
      console.log('this.user', this.user.focus());
    } else if (this.text.value.trim() === '') {
      this.text.focus();
      console.log('this.text', this.text.focus());
    }
  };
  render() {
    return (
      <div>
        작성자 :{' '}
        <input
          type="text"
          ref={(ref) => {
            this.user = ref;
          }}
        />
        제목 :{' '}
        <input
          type="text"
          ref={(ref) => {
            this.text = ref;
          }}
        />
        <button onClick={this.handleFocus}>작성</button>
        <br />
        <table>
          <thead>
            <tr>
              <th>번호</th>
              <th>제목</th>
              <th>작성자</th>
            </tr>
          </thead>
        </table>
      </div>
    );
  }
}

export default RefExam1;
