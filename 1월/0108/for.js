let numbers = [1, 2, 3, 4, 5, 6];
let colors = ['red', 'orange', '녹', '초', '파', '남', '보'];

//기본 for문
/*for (let i = 0; i < numbers.length; i++) {
    console.log(numbers[i]);
}

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
}

//for of문
//for ({}안에서 사용할 변수 of 배열)
for (let number of numbers) {
    console.log(number);
}
for (let color of colors) {
    console.log(color);
}

//forEach()문
//변수명.forEach({}안에서 사용할 변수, 인덱스, 배열 {})
//매개변수 설정은 마음대로 가능 대신 순서는 지켜야 됨
numbers.forEach(function (number, i) {
    console.log(number);
});
numbers.forEach((number, i) => {
    console.log(number);
});
numbers.forEach((number, a, arr) => {
    console.log(number, a, arr);
});

colors.forEach((color, idx) => {
    console.log(color, idx);
});
*/
let arr;
let arr2;
//filter() 조건에 부합하는 배열 요소만 반환
//arr = numbers.filter(function ({}안에 사용할 변수) {
//filter() {}안에는 조건식이 나오는게 일반적
//})
arr = numbers.filter((number) => {
    return number > 3;
});
//화살표 함수의 특징 중 하나는 { return }생략 가능
//{}가 있으면 return 생략 안됨
arr2 = colors.filter((color) => color.length > 2);
console.log(arr);
console.log(arr2);

//배열안에 있는 값을 더할 때는 그 더한 값의 합의 변수는 전역변수
let sum1 = 0;
for (let number of numbers) {
    sum1 += number;
}
console.log(sum1);

/*
//보충
//for in문
let colors2 = [{ color: 'red' }, { color: 'blue' }, { color: 'yellow' }];
//보통 객체(key=value)에 주로 사용.
//for( {}안에 사용할 index값 of 배열){}
for (let index in colors2) {
    console.log(index);
    console.log(colors2[index].color);
}

//do - while문
//적어도 한번 실행됨
let i = 0;
do {
    console.log(colors[i]);
    i++;
} while (i < colors.length);
*/
