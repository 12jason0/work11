function Clock() {
  return (
    <div>
      {/* toLocaleTimeString() : 사용자의 문화권에 맞는 시간표개법으로 시간 리턴*/}
      <h1>현재 시간은 {new Date().toLocaleTimeString()}입니다.</h1>
    </div>
  );
}

export default Clock;
