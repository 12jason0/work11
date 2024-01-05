//함수
//함수 선언문(기본적인 형태)
/*
function sayHello() {
    console.log("지역 Hello");
}

////////////////////함수 선언문 //////////////////
console.log("전역 Hello");
sayHello();    //함수를 불러줘야 출력을 한다

//덧셈 기능이 있는 함수를 선언
sumFunc(15, 10);  // 호이스팅
const num1 = 10;  //전역 변수

function sumFunc(num2, num3) {  // num2, num3는 매개변수, ()안에 변수들을 매개변수
    const num1 = 11;
    const sum = num1 + num2 + num3 ;
    // console.log("지역",num1);   // 함수내에 없으면 그 위에 부모한테서 찾고 그 결과값을 출력함
    console.log("결과", sum);
    //retrun 함수 제일 마지막에 사용. 값을 다시 전달
    return sum;
}
// console.log("전역",num1);
sumFunc(15, 10);  // ()안에 있는 값은 인자
// num2 = 60
// num3 = 10

let result = sumFunc(30,20)
//let result = 61
console.log(result);
console.log(++result);
*/



//////////////////함수 표현식//////////////////////////
//sayHello();  //호이스팅 불가
// let sayHello = function(num1) {
//     console.log(num1);
//     console.log("Hello");
// };

/////////////////////화살표 함수//////////////////////////
// let sayHello = (num1) => {
//     console.log(num1);
//     console.log("Hello");
//     return num1 + 10 ;
// };

// sayHello(20);
// let result = sayHello(30);
// console.log(result)

//실습 1
/*function multifly(num1, num2) {
    return num1*num2;
}
console.log(multifly(3,7));
console.log(multifly(2,2));

//실습 2
const square = (num)=> {
    console.log(num**2);
}
square(4);
square(11);
square(5);
*/
