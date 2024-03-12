import './Jsx4Exam.css';

function Jsx4Exam() {
  const title = 'Hello World';

  return (
    <div className="main">
      <h2>{title}</h2>
      <label>
        아이디 : <input type="text"></input>
      </label>
      <br />
      <label>
        비밀번호 : <input type="password"></input>
      </label>
    </div>
  );
}
export default Jsx4Exam;
