//실습 1
//object, boolean 데이터 타입을 순으로 설정하는 튜플 만들기
//olimpin_newgame[1] = false; 를 했을 때 변경되지 않도록 수정할 수 없는 데이터 만들기
let olimpic_newgame: readonly [object, boolean] = [
  //object 에다가 : { name: string; type: string; } 이렇게 적어도 됨
  {
    name: '소트트랙',
    type: '혼성 계주',
  },
  true,
];

//실습 2 (interface 이용)
// 화면에 나와있는 heroGame_A와 heroGame_B를 만족할 수 있는 interface Game 만들어 보기
interface Game {
  title: string;
  price: number;
  desc?: string;
  category: string;
  platform: string;
}

let heroGame_A: Game = {
  title: 'DC 언체인드',
  price: 50000,
  desc: 'DC 히어로 & 빌런 각각의 개성은 물론, 액션의 재미까지!',
  category: '액션',
  platform: '모바일',
};

let heroGame_B: Game = {
  title: 'MARVEL 퓨처파이트',
  price: 65000,
  category: '롤플레잉',
  platform: '모바일',
};

//실습 3
//두 개의 수를 매개 변수로 받고 합을 console.log로 출력하는 함수 sum1만들기

function sum1(a: number, b: number) {
  return a + b;
}
console.log(sum1(5, 11));

//실습 4
//(전개 연산자 이용) 매개변수로 여러 개의 수를 받고 전달된 값을 모두 더하는 함수 sum2
//모두 합산 한 값을 return 한다
// console.log(sum2(1,2,3,4,10));  //20

function sum2(...a: number[]) {
  let sum = 0;
  a.forEach((el) => (sum += el));
  return sum;
}

console.log(sum2(1, 2, 3, 4, 10));

//실습 5
//제네릭 이용해서 함수 arrElement 선언
//배열과 인덱스 번호: 매개변수로 받고
// Arr[index]에 대한 요소를 리턴하는 함수 만들기
//함수의 리턴 타입까지 작성하기

function arrElement<T>(arry: T[], index: number) {
  if (index >= arry.length) {
    return false;
  }
  return arry[index];
}

console.log(arrElement<string>(['a'], 1));
