const btn = document.getElementById('btn');
const def = document.getElementById('default');
const input = document.getElementById('input');
btn.addEventListener('click', function (event) {
    event.preventDefault();
    console.log(event);
    console.log(event.target);
    //console.log('안녕하세요');
});
btn.addEventListener('mouseover', function () {
    console.log('mouseover');
});
btn.addEventListener('mouseout', function () {
    console.log('mouseout');
});
input.addEventListener('focus', function () {
    console.log('focus');
    //alert('문자열입력 가능');
});
input.addEventListener('blur', function () {
    console.log(blur);
});
input.addEventListener('keydown', function () {
    console.log('keydown');
});
input.addEventListener('keyup', function () {
    console.log('keyup');
});

//this
//그 함수가 속해 있던 객체 참조.
//뭔가를 클릭 할 때 불러오는 함수(콜백 함수)에서 this는 그 뭔가를 의미함.
//preventDefault
def.addEventListener('click', function (e) {
    //event.preventDefault : 항상 맨 위에 존재, form 전송을 막는 메소드
    e.preventDefault();
    console.log(this);
    this.textContent = '클릭함';
});
