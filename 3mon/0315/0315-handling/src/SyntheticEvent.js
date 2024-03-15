export default function SyntheticEvent() {
  function syntheticEvent(e) {
    console.log(e);
    console.log('Synthetic Event Click!');
    //콘솔에 기록되는 e 객체는 SyntheticEvent (합성 이벤트)
    // : 리엑트가 DOM이 아닌 VirtualDOM을 사용하는 것처럼
    //웹 브라우저의 nativeEvent가 아닌 nativeEvent를 감싼 SyntheticEvent 사용

    // 즉, 리엑트에서 onClick, onChange 등등 같은 이벤트들은 브라우저의 기본 이벤트가 아니라
    // 브라우저의 이벤트들을 포함하고 있는 리엑트의 고유한 이벤트 객체
  }
  function printInputValue(e) {
    console.log(e.target.value);
  }
  return (
    <div>
      <button onClick={syntheticEvent}> synthetic event event 콘솔 찍기</button>
      <br />
      <input type="text" placeholder="입력하세요" onChange={printInputValue} />
    </div>
  );
}
