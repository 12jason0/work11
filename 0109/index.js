// HTML 요소 내용 읽고 쓰기
// 순서 중요(제일 마지막에 있는게 출력)
const text = document.getElementById('text');
console.log(text);

text.textContent = 'hi';
text.innerText = '안녕하세요';
text.innerHTML = '여기는 <b>첫번째</b> 태그입니다';
/*
textContent : 요소안에 텍스트 가져오거나 수정
innerText : 요소안에 텍스트 가져오거나 수정
textContent  vs  innerText
    - textContent : 공백 문자 그대로 반환, IE9 이전 버전사용 불가
    - innerText : 남는 공백 문자 제거, table, tbody, tr 등 테이블 요소 수정 불가 
innerHTML : 입력된 문자열을 HTML 형식으로!
*/

//classList
text.classList.add('title');
text.classList.remove('title');
text.classList.toggle('title-big');
console.log(text.classList.contains('title-big'));
/*
add : 클래스 추가
remove : 클래스 제거
toggle : 클래스가 있으면 제거, 없으면 추가
contains : 해당 클래스가 있는지  boolean 값 반환
*/
// setAttribute : html요소 속성 추가
const link = document.getElementById('link');
console.log(link);
link.setAttribute('href', 'https://www.naver.com');
const image = document.getElementById('image');
image.setAttribute('src', 'grass.png');
image.setAttribute('width', '200');
const input = document.getElementById('input');
input.setAttribute('placeholder', '이름을 입력하세요');
