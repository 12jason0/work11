//오브젝트(객체)는 여러가지 데이터가 하나로 묶여있는 형태
/*let cat = {
    // key : value 형태
    name : '고양이',
    age : 2,
    isCute : true,
    //funtion(){return "xxx"}
    // xxx를 출력 하려면 console.log(cat.mew())
    //괄호를 적어야 출력이 된다.
    mew : function () {
        return "야옹!"
    }

}
console.log(cat.name)
console.log(cat.age)
console.log(cat.isCute)
console.log(cat.mew())

// let people = {
//     name : '홍길동',
//     gender : "남자",
//     address : "서울시 마포구",
//     phone : "010-1234-5678", 
// }

// console.log(people)
// console.log(people.address)
// console.log(people.phone)


let people = {
    name : "오승용",
    age : "24",
    gender : "남자",
    address : "서울시 구로구"
}
console.log(people.name)
console.log(people.age)
console.log(people.gender)
console.log(people.address)*/

// typeof 데이터가 어떤 type인지 알려주는 키워드
// console.log(typeof "Hello")
// console.log(typeof true)
// const types = 20
// console.log(typeof types)

// const num1 = 21;
// const star = '안녕';
// console.log(typeof num1 + " isn't " + typeof star + ' data type.');
// const data = `${typeof num1} isn't ${typeof star} data type`;
// const is = true;
// console.log('Typeof를 boolean이나 null에 사용하면, ' + typeof is + ' 결과를 얻을 수 있습니다.');
// console.log(data);

// 형 변환: 데이터의 타입을 변환시켜주는 것
// prompt() : 사용자에 데이터를 입력받게 하는 것
// let mathScore = prompt("수학 점수를 입력 하세요");
// let engScore = prompt("영어 점수를 입력 하세요");

// let avg = (Number(mathScore)) + Number((engScore)) / 2
// console.log(avg)

// 문자형 변환

// let num = 123;
// console.log(typeof num)

// let a = String(num)
// console.log(typeof a)

// let b = num.toString()  null과 undefined에서 사용 불가
// console.log(typeof b)

// console.log(Number(12345))
// console.log(Number("abc"))

//연산자
console.log(1 + 1);
console.log(1 - 1);
console.log(1 * 4);
console.log(4 / 2);

console.log(100 % 2);
console.log(99 % 2);

console.log(2 ** 4);
let num = 5;
num += 10; // num = num + 10과 동일
console.log(num);
let result1, result2;
let nums = 10,
    nums2 = 15;

// =  nums ++ : 그 다음 줄로 넘어가야 증가
result1 = nums++; // 10
result1 = nums++; // 11
console.log(result1);

// =++ : 그 자리에서 바로 증가
result2 = ++nums2; //16
result2 = ++nums2; //17
console.log(result2);

let a = 1;
let b = '1';

//비교 연산자
console.log(a == b); //t
console.log(a != b); //f

//일치 연산자
console.log(a === b); //f
console.log(a !== b); //t

//논리 연산자
// || or 연산자는 둘 중 하나만 조건이 일치해도 통과
// && and 연산자는 두개 모두 조건이 일치해야 통과
let name = '뽀로로';
let age = 18;

if (name === '뽀로로' || age > 19) {
    console.log('통과');
} else {
    console.log('돌아가');
}

let names = '뽀로로';
let ages = 18;

if (names === '뽀로로' && ages > 19) {
    console.log('통과');
} else {
    console.log('돌아가');
}

let namess = '뽀로로';
let agess = 18;
let isAudlt = age > 19; //false

if (!isAudlt) {
    //isAudlt가 false냐?
    console.log('통과');
} else {
    console.log('돌아가');
}

let engScore = Number('88');
let mathScore = Number('77');

let avgScore = (engScore + mathScore) / 2;
console.log(avgScore);
