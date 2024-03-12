function Exam() {
  const Main = {
    display: 'flex',
  };
  const eyeBlack = {
    height: '15px',
    width: '15px',
    top: 21,
    left: 26,
    backgroundColor: 'black',
    position: 'absolute',
    borderRadius: 50,
    zIndex: 20,
  };
  const eyeWhite = {
    backgroundColor: 'white',
    height: '30px',
    width: '30px',
    top: 16,
    left: 23,
    borderRadius: 50,
    position: 'absolute',
    zIndex: 2,
  };
  return (
    <div style={Main}>
      <div style={eyeBlack}></div>
      <div style={eyeWhite}></div>
      <div
        style={{
          color: '',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgb(51, 51, 233)',
          position: 'absolute',
        }}
      ></div>
      <div
        style={{
          color: '',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'blue',
          top: '34px',
          left: '76px',
          position: 'absolute',
        }}
      ></div>
      <div
        style={{
          color: '',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'darkblue',
          top: 77,
          left: 130,
          position: 'absolute',
          top: '78px',
          left: '192px',
        }}
      ></div>
      <div
        style={{
          color: '',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgb(15, 15, 81)',
          position: 'absolute',
          top: '79px',
          left: '247px',
          zIndex: 10,
        }}
      ></div>
      <div
        style={{
          color: '',
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          backgroundColor: 'rgb(92, 92, 237)',
          position: 'absolute',
          top: '77px',
          left: '130px',
        }}
      ></div>
    </div>
  );
}

export default Exam;
