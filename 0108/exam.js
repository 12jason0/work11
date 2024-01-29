//실습1
const numbers = [];
for (let i = 1; i <= 100; i++) {
    numbers.push(i);
}

console.log(numbers);
let sum1 = 0;
let sum2 = 0;
let sum3 = 0;

for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
console.log(sum1);

for (let number of numbers) {
    sum2 += number;
}
console.log(sum2);

numbers.forEach((number) => {
    sum3 += number;
});
console.log(sum3);

//실습2
let fruits1 = ['사과', '딸기', '파인애플', '수박', '참외', '오렌지', '자두', '망고'];
let fruits2 = ['수박', '사과', '참외', '오렌지', '파인애플', '망고', '바나나'];

// let same = [];
// let diff = [];

// for (let fruit of fruits1) {
//     fruits2.includes(fruit) ? same.push(fruit) : diff.push(fruit);
// }
// console.log('saem', same);
// console.log('diff', diff);
//
/*
//방법1
//배열이 긴것을 기준으로 잡는다.
fruits1.forEach((fruits) => {
    if (fruits2.includes(fruits)) {
        same.push(fruits);
    }
});

fruits1.forEach((fruits) => {
    if (!fruits2.includes(fruits)) {
        diff.push(fruits);
    }
});
*/
//방법2
let same = fruits1.filter((fruit) => fruits2.includes(fruit));
let diff = fruits1.filter((fruit) => !fruits2.includes(fruit));
let diff2 = fruits2.filter((fruit) => !fruits1.includes(fruit));

console.log('saem', same);
console.log('diff', diff);
console.log('diff2', diff2);
